import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA3HF_DLR8nTVZVJHGqWMZn4l2f-Npj8Ew",
    authDomain: "modern-react-app-a9bcd.firebaseapp.com",
    projectId: "modern-react-app-a9bcd",
    storageBucket: "modern-react-app-a9bcd.appspot.com",
    messagingSenderId: "18914204349",
    appId: "1:18914204349:web:81762808d9da2f4f5cb5d4"
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();
  const auth = getAuth();

  export {db,auth};