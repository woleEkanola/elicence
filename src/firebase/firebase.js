import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBbypZwQyaJqY-ZG3Tseri848sgjVQPDfg",
    authDomain: "rechat-44321.firebaseapp.com",
    databaseURL: "https://rechat-44321.firebaseio.com",
    projectId: "rechat-44321",
    storageBucket: "rechat-44321.appspot.com",
    messagingSenderId: "345604450652"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;