import {db} from '../../firebase';


export function getAllData(){
    db.collection("Clothes").get().then(querySnapshot=>{
       return {type:"GET_CLOTH",data:querySnapshot.docs.map(doc=>doc.data())};
    })
}