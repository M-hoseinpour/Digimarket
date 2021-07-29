import firebase from 'firebase';

const Firebase = firebase.initializeApp({
    apiKey: "AIzaSyDcI7jnBPT04irIu8hQEbewxCjqPMt_asc",
    authDomain: "digimarket-eeec0.firebaseapp.com",
    projectId: "digimarket-eeec0",
    storageBucket: "digimarket-eeec0.appspot.com",
    messagingSenderId: "203805955128",
    appId: "1:203805955128:web:13295e22412650058e02cd",
    measurementId: "G-J0D550X1JH"
})


const auth = Firebase.auth();

export { auth }