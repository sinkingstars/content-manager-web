import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDG6G3w_2OtlpVZEo6jOGkO8_zmPpAZpYU",
    authDomain: "contentmanager-110da.firebaseapp.com",
    databaseURL: "https://contentmanager-110da.firebaseio.com",
    projectId: "contentmanager-110da",
    storageBucket: "contentmanager-110da.appspot.com",
    messagingSenderId: "209255784998",
    appId: "1:209255784998:web:f227db0f16cffacff8fce7",
    measurementId: "G-Z4N4T1Y6LM"
  };

export default firebase.initializeApp(firebaseConfig);