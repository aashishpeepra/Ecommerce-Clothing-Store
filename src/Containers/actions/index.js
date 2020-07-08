import {db} from '../../firebase';


export function getAllData(){
    db.collection("Clothes").get().then(querySnapshot=>{
        return querySnapshot.docs.map(doc=>doc.data());
    })
}