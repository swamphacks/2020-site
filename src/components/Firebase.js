import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/functions';
import React from 'react';
import firebaseConfig from '../firebaseConfig.json';

const FirebaseContext = React.createContext(null);

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.storage = firebase.storage();
    this.firestore = firebase.firestore();
    this.functions = firebase.functions();
    this.submitApplication = this.functions.httpsCallable('submitApplication');
    this.getYearConfig = this.functions.httpsCallable('getYearConfig');
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
}

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default Firebase;

export { FirebaseContext, withFirebase };
