// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, 
        signInWithPopup, GoogleAuthProvider, 
        createUserWithEmailAndPassword, signInWithEmailAndPassword,
        onAuthStateChanged, signOut
      } from 'firebase/auth';

import { getFirestore, 
   doc, 
   getDoc,
   getDocs,
   setDoc,
   collection,
   writeBatch,
   query
   } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6od3OVCmZPKeDOdYuXcHlhBYWeRJq2_g",
  authDomain: "crown-clothing-db-rama.firebaseapp.com",
  projectId: "crown-clothing-db-rama",
  storageBucket: "crown-clothing-db-rama.appspot.com",
  messagingSenderId: "609432321679",
  appId: "1:609432321679:web:5f11cb62ccdfb507423afa"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters(
    {
        prompt: 'select_account'
    }
);

const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

//function to create userDocument
export const createUserDocument = async (userauth, additionalInfo) => {

  const userDocRef = doc(db, 'users', userauth.uid);

  const userSnapShot = await getDoc(userDocRef);

  var userExists = userSnapShot.exists();

  if(!userExists)
  {
     try
     {
        await setDoc(userDocRef, {
          displayName : userauth.displayName,
          createdAt : new Date(),
          email : userauth.email,
          ...additionalInfo
        })
     }
     catch(error)
     {
        console.log('cannot create the user ', error.message);
     }
  }
}

//function to createUser with email and password
export const createUserWithEmailPassword = async (email, password) =>
{
    return await createUserWithEmailAndPassword(auth, email, password);
}

//function to sign in with email and password
export const signInWithEmail = async (email, password) =>
{
   return await signInWithEmailAndPassword(auth, email, password);
}

export const onAuthStateChangedHandler = (callback) =>
{
   return onAuthStateChanged(auth, callback);
}

export const signOutUser = () =>
{
    signOut(auth);
}

//Store user data
export const addCollectionAndDocuments = async (
   collectionKey,
   objectsToAdd
 ) => {
   const batch = writeBatch(db);
   const collectionRef = collection(db, collectionKey);
   
   objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
   });
 
   await batch.commit();
   console.log('done');
 };

 export const getCollectionAndDocuments = async () => {

      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef);

      const querySnapshot = await getDocs(q);
      const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});
    
      return categoryMap;
 }