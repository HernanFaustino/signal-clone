import * as firebase from 'firebase';

import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyB08lYFXFCMy6i8W57Ni-_yAqSbha1rNTY',
  authDomain: 'signal-clone-49bd0.firebaseapp.com',
  projectId: 'signal-clone-49bd0',
  storageBucket: 'signal-clone-49bd0.appspot.com',
  messagingSenderId: '128647285918',
  appId: '1:128647285918:web:c7c1dabf0ca7e6b7beff8f',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };