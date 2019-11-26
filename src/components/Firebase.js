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
}

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default Firebase;

export {FirebaseContext, withFirebase};
