import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDincVmK_2eK_cCYcvk1IMXOfFbNqyXY_k",
    authDomain: "clothingshopspecial.firebaseapp.com",
    databaseURL: "https://clothingshopspecial.firebaseio.com",
    projectId: "clothingshopspecial",
    storageBucket: "clothingshopspecial.appspot.com",
    messagingSenderId: "957928126115",
    appId: "1:957928126115:web:151f67165235b4316e7116",
    measurementId: "G-YCRM5CS9GN"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
export {db};
// const databaseRef=firebase.database().ref();
// export const cloths=databaseRef.child("clothes");
