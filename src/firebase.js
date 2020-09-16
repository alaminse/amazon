import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJWIE3Xp5lzT88VQ4zU3wkBYQVw6rxZck",
    authDomain: "clone-88a45.firebaseapp.com",
    databaseURL: "https://clone-88a45.firebaseio.com",
    projectId: "clone-88a45",
    storageBucket: "clone-88a45.appspot.com",
    messagingSenderId: "455903250607",
    appId: "1:455903250607:web:6e83f5cc6e882770e0ec5a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };
