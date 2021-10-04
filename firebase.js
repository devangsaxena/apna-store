import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCQOYkHVlkCn4jGXahZQvcYKfmDP-n8u5M",
  authDomain: "codis-f6a7b.firebaseapp.com",
  projectId: "codis-f6a7b",
  storageBucket: "codis-f6a7b.appspot.com",
  messagingSenderId: "240892312016",
  appId: "1:240892312016:web:1fcdc51b5d81b7c07861d5"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export default db