import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyAK_lIQeA7h_JxGG734eqo0EJE4XGtueTM',
    authDomain: 'crwn-db-b888c.firebaseapp.com',
    databaseURL: 'https://crwn-db-b888c.firebaseio.com',
    projectId: 'crwn-db-b888c',
    storageBucket: 'crwn-db-b888c.appspot.com',
    messagingSenderId: '132677621990',
    appId: '1:132677621990:web:800733bd1e0e6134414327',
    measurementId: 'G-L5MTJYFDZR'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
