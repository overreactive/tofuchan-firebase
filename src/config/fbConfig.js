import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9B38Gj4br2Rctom6hXfxP0fXASSgLG9g",
  authDomain: "tofuchan-d12e7.firebaseapp.com",
  databaseURL: "https://tofuchan-d12e7.firebaseio.com",
  projectId: "tofuchan-d12e7",
  storageBucket: "tofuchan-d12e7.appspot.com",
  messagingSenderId: "351322348102",
  appId: "1:351322348102:web:9e7f9cca9b28d69b6a4847",
  measurementId: "G-DVSQTEK8HX"
};

firebase.initializeApp(firebaseConfig);
firebase.auth()
firebase.firestore()

export default firebase
