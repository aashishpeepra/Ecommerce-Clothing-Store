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

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };


function loginUser(email, password) {
  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log("Logged -> ", res);
      db.collection("Users").doc(res.user.uid).get().then(querySnapshot => {
        console.log(querySnapshot.data());
      })
        .catch(err => {
          console.log(err);
        })
    })
    .catch(err => {
      console.log(err.message);
    })
}

function signupUser(email, password, data) {
  const auth = firebase.auth();
  auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res);
      console.log(res.user.uid)
      db.collection("Users/").doc(res.user.uid).set({ name: data["name"], email: data["email"], location: data["location"], orders: [], phone: "" }).then(res => console.log(res)).catch(err => console.log(err))
    })
    .catch(err => {
      console.log(err);
    })
}


firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
  }
  else {
    console.log("Not logged in");
  }
})


export { loginUser };
export { signupUser };
// const databaseRef=firebase.database().ref();
// export const cloths=databaseRef.child("clothes");
