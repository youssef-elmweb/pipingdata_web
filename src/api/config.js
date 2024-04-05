// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDoc, getDocs, query, limit } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDY0jwLAfpJ23bB3eu4syUNfm1DTEfluRU",
    authDomain: "pipingdata-landing-page-promo.firebaseapp.com",
    projectId: "pipingdata-landing-page-promo",
    storageBucket: "pipingdata-landing-page-promo.appspot.com",
    messagingSenderId: "1055918987467",
    appId: "1:1055918987467:web:f66a69eae701c97385634e",
    measurementId: "G-KZH5RPFNZ7"
};

// Initialize Firebase
export async function getLastIndex(usersCol) {
    let index;

    const usersSnapshot = await getDocs(usersCol);
    const userList = usersSnapshot.docs.map((doc) => {
    
    index = doc.id.substr(doc.id.length-1, doc.id.length);
    });

    return Number(parseInt(index));
}

export async function getUsers(db) {
    let tabUsers = [];

    const usersCol = collection(db, 'users-pipingdata.app');

    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => { tabUsers.push(doc.data().mail); });
        
    return tabUsers;
}

export async function getComments(db) {
    let tabComments = [];

    const commentsCol = collection(db, 'comments-pipingdata.app');

    const commentsSnapshot = await getDocs(commentsCol);
    const commentsList = commentsSnapshot.docs.map(doc => { tabComments.push(doc.data().mail); });
        
    return tabComments;
}

export const increaseIndex = (result) => {
    let index; 

    if (result > 0) {
        index = result+1;
    }   else if (typeof result == "number") {
            index = 1;
        } 
    
    return index;
}

export async function addUsers(db, userData) { 
    const usersCol = collection(db, 'users-pipingdata.app');
        
    addDoc(usersCol, {
        mail: userData.mail,
        job: userData.job
    });
}

export async function addComments(db, userData) { 
    const commentsCol = collection(db, 'comments-pipingdata.app');
        
    addDoc(commentsCol, {
        mail: userData.mail,
        comment: userData.comment
    });
}

export function setUsers(db, userData) { 
    const usersCol = collection(db, 'users-pipingdata.app');
    let lastIndexUser = getLastIndex(usersCol);

    lastIndexUser.then(function(index) {
        const userCol = doc(db, 'users-pipingdata.app', `${increaseIndex(Number(index))}`);
        
        setDoc(userCol, {
            mail: userData.mail,
            job: userData.job
        });
    });
}




