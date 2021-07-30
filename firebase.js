import firebase from "firebase";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCajdmD-SxMEAMQKIGcBRLrn8W67UNk2zU",
    authDomain: "facebook-clone-8cbdb.firebaseapp.com",
    projectId: "facebook-clone-8cbdb",
    storageBucket: "facebook-clone-8cbdb.appspot.com",
    messagingSenderId: "314619903486",
    appId: "1:314619903486:web:a40afc9cec989a7b2a14af"
  };

  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db=app.firestore();
  const storage=firebase.storage();
  
  export {db,storage};