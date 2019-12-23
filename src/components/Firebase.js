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

  sendPasswordResetEmail = async email => {
    await this.auth.sendPasswordResetEmail(email);
  };

  checkSignedIn = callback => {
    const unsubscriber = this.auth.onAuthStateChanged(user => {
      const val = user !== null ? true : false;
      callback(val);
    });
    return unsubscriber;
  };

  signIn = async (email, password) => {
    await this.auth.signInWithEmailAndPassword(email, password);
  };

  createAccount = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  signInAnonymously = async () => {
    await this.auth.signInAnonymously();
  };

  signOut = async () => {
    await this.auth.signOut();
  };

  uploadResume = (name, file) => {
    const ref = this.storage.ref('2020/resumes').child(name + 'Resume.pdf');
    const fullPath = ref.put(file).then(snap => {
      return snap.ref.fullPath;
    });
    return fullPath;
  };

  submitApplication = async data => {
    const ref = this.firestore
      .collection('years')
      .doc('2020')
      .collection('applications')
      .doc();
    const metaRef = this.firestore
      .collection('years')
      .doc('2020')
      .collection('metadata')
      .doc('applications');
    await ref.set({...data, uid: this.auth.currentUser.uid});
    await metaRef.update({size: firebase.firestore.FieldValue.increment(1)});
  };

  submitMentorVolunteerApplication = async data => {
    const ref = this.firestore
      .collection('years')
      .doc('2020')
      .collection('mentorVolunteerApplications')
      .doc();
    const metaRef = this.firestore
      .collection('years')
      .doc('2020')
      .collection('metadata')
      .doc('mentorVolunteerApplications');
    await ref.set(data);
    await metaRef.update({size: firebase.firestore.FieldValue.increment(1)});
  };

  getCheckinCode = async () => {
    const ref = this.firestore
      .collection('tokens')
      .where('used', '==', false)
      .limit(1);
    let code = null;
    const docs = await ref.get();
    docs.forEach(doc => {
      code = doc.id;
    });
    const nf = this.firestore.collection('tokens').doc(code);
    await nf.update({used: true});
    return code;
  };

  assignTheCodes = async () => {
    await this.signInAnonymously();
    const ref = this.firestore
      .collection('years')
      .doc('2020')
      .collection('applications');
    const docs = await ref.get();
    let ids = [];
    docs.forEach(doc => {
      if (doc.data().email !== 'cz8ch8ry@gmail.com') {
        ids.push(doc.id);
      }
    });
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const nf = this.firestore
        .collection('years')
        .doc('2020')
        .collection('applications')
        .doc(id);
      const code = await this.getCheckinCode();
      console.log(`${i} - ${code}`);
      await nf.update({checkinCode: code});
    }
    await this.signOut();
    console.log('Success');
  };

  getDashboardData = callback => {
    const uid = this.auth.currentUser.uid;
    const ref = this.firestore
      .collection('years')
      .doc('2020')
      .collection('applications')
      .where('uid', '==', uid);
    const unsubscriber = ref.onSnapshot(snap => {
      console.log('Data updated!');
      let retData = {};
      snap.docs.forEach(doc => {
        const data = doc.data();
        const {firstName, lastName, email, accepted, checkinCode} = data;
        const status = accepted === true ? 'Accepted' : 'Pending';
        const name = firstName + ' ' + lastName;
        const fi = firstName.substr(0, 1);
        const li = lastName.substr(0, 1);
        const initials = fi + li;
        retData = {
          initials: initials,
          name: name,
          email: email,
          status: status,
          code: checkinCode
        };
      });
      callback(retData);
    });
    return unsubscriber;
  };

  getNumberApplications = async () => {
    await this.signInAnonymously();
    const ref = this.firestore
      .collection('years')
      .doc('2020')
      .collection('applications');
    const applications = await ref.get();
    console.log(`Number of applications: ${applications.size}`);
    // const metaRef = this.firestore
    //   .collection('years')
    //   .doc('2020')
    //   .collection('metadata')
    //   .doc('applications');
    // await metaRef.update({size: applications.size});
    const ref2 = this.firestore
      .collection('years')
      .doc('2020')
      .collection('mentorVolunteerApplications');
    const mvApplications = await ref2.get();
    console.log(
      `Number of mentor-volunteer applications: ${mvApplications.size}`
    );
    // const metaRef2 = this.firestore
    //   .collection('years')
    //   .doc('2020')
    //   .collection('metadata')
    //   .doc('mentorVolunteerApplications');
    // await metaRef2.update({size: mvApplications.size});
    await this.signOut();
  };

  getApplicants = async () => {
    await this.signInAnonymously();
    const ref = this.firestore
      .collection('years')
      .doc('2020')
      .collection('applications');
    const apps = await ref.get();
    let csvData = [
      [
        'Last Name',
        'First Name',
        'School',
        'Date of Birth',
        'Email Address',
        'Phone Number',
        'Check-In Code'
      ]
    ];
    apps.docs.forEach(doc => {
      const {
        firstName,
        lastName,
        dateOfBirth,
        school,
        email,
        phone,
        checkinCode
      } = doc.data();
      let modSchool = `"${school}"`;
      const row = [
        lastName,
        firstName,
        school,
        dateOfBirth,
        email,
        phone,
        checkinCode
      ];
      csvData.push(row);
    });
    let csvContent =
      'data:text/csv;charset=utf-8,' + csvData.map(e => e.join(',')).join('\n');
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
    await this.signOut();
  };
}

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default Firebase;

export {FirebaseContext, withFirebase};
