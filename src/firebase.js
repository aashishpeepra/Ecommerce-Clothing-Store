import * as firebase from 'firebase';
import { store } from "./index";

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


function loginUser(email, password,cb) {
  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, password)
    .then(res => {
      cb();
      console.log("Logged -> ", res);
      console.log(cb)
      
    })
    .catch(err => {
      alert('Check your email/ Password');
      console.log(err.message);
    })
}

const workItOut = (res, data) => {
  db.collection("Users").doc(res.user.uid).set({ name: data["name"], email: data["email"], location: data["location"], orders: [], phone: data["phone"] })
    .then(res => console.log(res))
    .catch(err => { alert("check your network!"); console.log(err) })
}
function signupUser(email, password, data) {
  const auth = firebase.auth();
 
    // Other config options...

  auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      // console.log(res);
      // console.log(res.user.uid)
      // store.dispatch({type:"AUTH_IN",obj:{ name: data["name"], email: data["email"], location: data["location"], orders: [], phone: "" }})
      // dataStorage={ name: data["name"], email: data["email"], location: data["location"], orders: [], phone: "" }
      // alert("Signed Up");
      // checkIfSignup=true;
      workItOut(res, data);
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
}
function logout() {
  firebase.auth().signOut().then(res => {
    store.dispatch({ type: "AUTH_OUT" })
  })
}
function resetPass(email,cb,fails){
  firebase.auth().sendPasswordResetEmail(email)
  .then((data)=>{
    console.log(data);
    cb();
  })
  .catch(err=>{
    fails();
  })
}
function submitOrder(data, previousOrders,cb) {
  if (firebase.auth().currentUser !== null) {
    console.log("Data->", data)
    console.log("Previous ", previousOrders)
    console.log("Attached", [...previousOrders, data.order]);
    db.collection("Orders").doc(firebase.auth().currentUser.uid).set(data)
      .then(res => {
        console.log(res);
        let length=data.orders.length;
        let latest=data.orders[length-1].items.map(eachItem=>{return {title:eachItem.data.title,qty:eachItem.qty}});
        let extraCheck=true;
        latest.forEach(element => {
          db.collection("Clothes").doc(element.title).get().then(data=>{
            let magicQty=0;
            const responseData=data.data();
            if(responseData.quantity!==undefined)
            magicQty=responseData.quantity;
            if(parseInt(magicQty)-parseInt(element.qty)<0)
            extraCheck=false;
            db.collection("Clothes").doc(element.title).update({quantity:magicQty-element.qty});
          })
          
        });

        cb();
      })
      .catch(err => {
        alert("some Error Occured! Try again");
        console.log(err.message);
      })
    db.collection("Users").doc(firebase.auth().currentUser.uid).update({ orders: data.orders });
  }

}

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    // db.collection("Users").doc(firebaseUser.uid).set({ name: "Admin", email:"thissiteadmin753654@admin.com" , location: {city:"Pak",address:"Unknown",pincode:"205874"}, orders: [], phone: "" })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
    console.log("From Auth", firebaseUser.uid);
    db.collection("Users").doc(firebaseUser.uid).get().then(querySnapshot => {
      console.log("Got Data", querySnapshot.data());
      // initialState.loggedIn = true;
      // initialState.userInfo = { ...querySnapshot.data() }
      // if(querySnapshot.data()!==undefined)
      store.dispatch({ type: "AUTH_IN", obj: querySnapshot.data() })
      // else if(checkIfSignup)
      //   store.dispatch({type:"AUTH_IN",obj:dataStorage});
      // else
      //   console.log("In auth state, neither first nor second",checkIfSignup,dataStorage);
      // console.log(initialState);
    })
      .catch(err => {
        console.log(err);
      })

  }
  else {
    store.dispatch({ type: "AUTH_OUT" })
  }
})

const storage = firebase.storage();
export { storage };
export { loginUser };
export { signupUser };
export { logout };
export { submitOrder };
export {resetPass}
// const databaseRef=firebase.database().ref();
// export const cloths=databaseRef.child("clothes");
// thissitesecretid85923@site.com
// skfbwgub<!@$%35424>/2874skjdvb!#28ohf
// thissiteadmin753654@admin.com
// <sbsfo##$%694!31sjvna/ajnw$3546w/>
// ElIc4x7DuBTKO0xFaKCy3kHATV53
