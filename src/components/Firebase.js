import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import React from 'react';
import firebaseConfig from '../firebaseConfig.json';

const FirebaseContext = React.createContext(null);

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.storage = firebase.storage();
    this.firestore = firebase.firestore();
  }

  signIn = async (email, password) => {
    await this.auth.signInWithEmailAndPassword(email, password);
  };

  createAccount = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  uploadResume = (name, file) => {
    const ref = this.storage.ref('2020/resumes').child(name + 'Resume.pdf');
    const fullPath = ref.put(file).then(snap => {
      return snap.ref.fullPath;
    });
    return fullPath;
  };

  submitApplication = data => {
    const ref = this.firestore
      .collection('years')
      .doc('2020')
      .collection('applications')
      .doc();
    return ref.set({...data, uid: this.auth.currentUser.uid});
  };

  getNumberApplications = async () => {
    const ref = this.firestore
      .collection('years')
      .doc('2020')
      .collection('applications');
    const applications = await ref.get();
    console.log(`Number of applications: ${applications.size}`);
  };

  getTravelApplicationData = async () => {
    const ref = this.firestore
      .collection('years')
      .doc('2020')
      .collection('applications')
      .where('needsTravelAssist', '==', 'Yes');
    const apps = await ref.get();
    let csvData = [
      [
        'Last Name',
        'First Name',
        'School',
        'Date of Birth',
        'Email Address',
        'Travel Types Considered'
      ]
    ];
    apps.docs.forEach(doc => {
      const {
        firstName,
        lastName,
        dateOfBirth,
        school,
        email,
        travelType
      } = doc.data();
      let t = '"';
      travelType.forEach(e => {
        t += e;
        t += ', ';
      });
      t += '"';
      const row = [lastName, firstName, school, dateOfBirth, email, t];
      csvData.push(row);
    });
    let csvContent =
      'data:text/csv;charset=utf-8,' + csvData.map(e => e.join(',')).join('\n');
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  };
}

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default Firebase;

export {FirebaseContext, withFirebase};
