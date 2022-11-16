// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { addDoc, collection, getFirestore,getDocs, doc} from 'firebase/firestore';
import {getStorage,ref,getDownloadURL,uploadBytesResumable,deleteObject} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5sSsIWgO4j1mfDxJPe51-9r6DTX5B0aQ",
    authDomain: "restaurent-app-83b4c.firebaseapp.com",
    projectId: "restaurent-app-83b4c",
    storageBucket: "restaurent-app-83b4c.appspot.com",
    messagingSenderId: "283346088883",
    appId: "1:283346088883:web:2cce114704ac6fbc4091c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Intiating firestore
const db = getFirestore(app);

//Initializing storage
const storage = getStorage(app);

//uploading data to firestore

export const uploadData = async(data)=>{
    const collectionRef = collection(db,'menu-items');
    const docRef = await addDoc(collectionRef,data)

}

//getting data from firestore

export const fetchData =async()=>{
    const collectionRef =collection(db,'mwnu-items');
    const querySnapshot = await getDocs(collectionRef);

    const data = querySnapshot.docs.reduce((acc,cur)=>{
        acc =[...acc,{...cur,id:doc.id}]
        return acc
    },[])

    return data;
}

//uploading file to storage
export const uploadFile =async(file,setFn,progressFn)=>{
    const storageRef = ref(storage,`menu-images/${file.name}`)
    const upload = uploadBytesResumable(storageRef,file)

    
}