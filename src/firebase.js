import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCMNVeywtpZ19Rd9uuatTzRNHvbzGBNZ3U",
  authDomain: "vhs-club.firebaseapp.com",
  projectId: "vhs-club",
  storageBucket: "vhs-club.appspot.com",
  messagingSenderId: "613452163852",
  appId: "1:613452163852:web:4ac7b64bfb96b9d2afb729"
};

const app = firebase.initializeApp(firebaseConfig);

 export const firestore = firebase.firestore(app);




 

