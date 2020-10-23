import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAl3TYJi1lhqM86ntNdWN1wuSj1XxjQljg",
    authDomain: "content-manager-d579d.firebaseapp.com",
    databaseURL: "https://content-manager-d579d.firebaseio.com",
    projectId: "content-manager-d579d",
    storageBucket: "content-manager-d579d.appspot.com",
    messagingSenderId: "104539329559",
    appId: "1:104539329559:web:79e0f1e024e596bb4ef852",
    measurementId: "G-J431LCFMSD"
  };

export default firebase.initializeApp(firebaseConfig);