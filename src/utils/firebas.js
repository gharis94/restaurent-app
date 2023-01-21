// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { addDoc, collection, getFirestore,getDocs, doc,updateDoc,serverTimestamp} from 'firebase/firestore';
import {getStorage,ref,getDownloadURL,uploadBytesResumable,deleteObject} from 'firebase/storage'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';

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

//Initializing Auth sevice
const auth = getAuth(app);
//uploading data to firestore

export const uploadData = async(data,type)=>{
    console.log('up',data)
    const collectionRef = collection(db,type);

    try{
        await addDoc(collectionRef, data)
        //console.log(docRef)
        return 'succeesful';
    }catch(error){
        return error.message
    }
    
}

//getting data from firestore

export const fetchData =async(type)=>{
    const collectionRef =collection(db,type);
    const querySnapshot = await getDocs(collectionRef);


    const data = querySnapshot.docs.reduce((acc,cur)=>{
        acc =[...acc,{...cur.data(),id:cur.id}]
        return acc
    },[])
    return data;
}

//uploading file to storage
export const uploadFile =async(file,setFn,progressFn)=>{
    const storageRef = ref(storage,`menu-images/${file.name}`)
    const upload = uploadBytesResumable(storageRef,file)

    const  unsubscribe = upload.on('state_changed',(snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload Progress ${progress}%`)

            switch (snapshot.state) {
                case 'paused':
                    console.log('paused')
                    break;
                case 'running':
                    console.log('upload is running')
                    break;
                default:
                    break
            }},(error)=>{
        console.log(error)
    },async()=>{
        const rsp = await getDownloadURL(upload.snapshot.ref);
        
        setFn(prev=>({...prev,imageUrl:rsp}));
        progressFn(true)

        return unsubscribe;
    })    
}

// updating firestore data 

export const updateData = async(type,data)=>{
    const docRef = doc(db,type,data.id);
    try{
        await updateDoc(docRef, {
            ...data,
            status: 'fullfilled'
        })

    }catch(error){
        return error.message;
    }
    
}

//sign in 

export const signIn =async(email,password)=>{
    console.log(email)
    try{
        const rsp = await signInWithEmailAndPassword(auth,email,password);
        console.log(rsp)
        return rsp.user;
    }catch(error){
        return error.message;
    }   
}