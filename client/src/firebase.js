import * as firebase from 'firebase';
  
  
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0DlsvoB8_VY5a7UIUn00URMGc-QwD-Wg",
  authDomain: "ecommerce-2b771.firebaseapp.com",
  databaseURL: "https://ecommerce-2b771.firebaseio.com",
  projectId: "ecommerce-2b771",
  storageBucket: "ecommerce-2b771.appspot.com",
  messagingSenderId: "122556031646",
  appId: "1:122556031646:web:50478e42b445b1b489918f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//   exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();