
import app from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCQS02VO8AWGgOG_Egpt8s57wiCeu5pm5U",
    authDomain: "react-train-7bdd2.firebaseapp.com",
    databaseURL: "https://react-train-7bdd2.firebaseio.com",
    projectId: "react-train-7bdd2",
    storageBucket: "react-train-7bdd2.appspot.com",
    messagingSenderId: "64055150924"
  };
  
  {/*
  const devConfig = {
    apiKey: process.env.REACT_APP_DEV_API_KEY,
    authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
    projectId: process.env.REACT_APP_DEV_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
  };


  const config =
  process.env.NODE_ENV === 'production ' ? prodConfig : devConfig;
  */}

  class Firebase {
    constructor() {
      app.initializeApp(config);
  
      this.auth = app.auth();
      this.db = app.database();
    }
  
    // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  
    // *** User API ***
  
    user = uid => this.db.ref(`users/${uid}`);
  
    users = () => this.db.ref('users');
  }
  
  export default Firebase;