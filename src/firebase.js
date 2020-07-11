import * as firebase from 'firebase';
import {store} from "./index";

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
      store.dispatch({type:"AUTH_IN",obj:{ name: data["name"], email: data["email"], location: data["location"], orders: [], phone: "" }})
      console.log({ name: data["name"], email: data["email"], location: data["location"], orders: [], phone: "" })
      db.collection("Users/").doc(res.user.uid).set({ name: data["name"], email: data["email"], location: data["location"], orders: [], phone: "" }).then(res => console.log(res)).catch(err => console.log(err))
    })
    .catch(err => {
      console.log(err);
    })
}
function logout(){
  firebase.auth().signOut().then(res=>{
    store.dispatch({type:"AUTH_OUT"})
  })
}

function submitOrder(data,previousOrders){
  if(firebase.auth().currentUser!==null)
  {
    console.log("Data->",data)
    console.log("Previous ",previousOrders)
    console.log("Attached",[...previousOrders,data.order]);
    db.collection("Orders/").doc(firebase.auth().currentUser.uid).set(data)
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err.message);
    })
    db.collection("Users/").doc(firebase.auth().currentUser.uid).update({orders:data.orders});
  }
  
}

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log("From Auth",firebaseUser);
    db.collection("Users").doc(firebaseUser.uid).get().then(querySnapshot => {
      console.log("Got Data",querySnapshot.data());
      // initialState.loggedIn = true;
      // initialState.userInfo = { ...querySnapshot.data() }
      if(querySnapshot.data()!==undefined)
        store.dispatch({type:"AUTH_IN",obj:querySnapshot.data()})
      // console.log(initialState);
    })
      .catch(err => {
        console.log(err);
      })

  }
  else {
    store.dispatch({type:"AUTH_OUT"})
  }
})


export { loginUser };
export { signupUser };
export {logout};
export {submitOrder};
// const databaseRef=firebase.database().ref();
// export const cloths=databaseRef.child("clothes");
