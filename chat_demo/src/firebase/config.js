import firebase from 'firebase/app'

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBLL4w2gxSNYzW9uwPwusvPzVRHg8kJ3wA",
    authDomain: "chat-demo-b4f37.firebaseapp.com",
    projectId: "chat-demo-b4f37",
    storageBucket: "chat-demo-b4f37.appspot.com",
    messagingSenderId: "312527952739",
    appId: "1:312527952739:web:6cb960125a9db7ea41d156",
    measurementId: "G-M9P2D9R263"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); 

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;