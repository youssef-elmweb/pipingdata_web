// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, where, addDoc, getDoc, getDocs, orderBy, query, limit, increment } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];

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

export async function getPseudos(db) {
    let tabPseudos = [];

    const pseudosCol = collection(db, 'opinions-pipingdata.app');

    const pseudosSnapshot = await getDocs(pseudosCol);
    const pseudosList = pseudosSnapshot.docs.map(doc => { tabPseudos.push(doc.data().name); });
        
    return tabPseudos;
}

export async function getMailsOfComments(db) {
    let tabComments = [];

    const commentsCol = collection(db, 'comments-pipingdata.app');

    const commentsSnapshot = await getDocs(commentsCol);
    const commentsList = commentsSnapshot.docs.map(doc => { tabComments.push(doc.data().mail); });
        
    return tabComments;
}

export async function getNamesOfComments(db) {
    let tabComments = [];

    const commentsCol = collection(db, 'comments-pipingdata.app');

    const commentsSnapshot = await getDocs(commentsCol);
    const commentsList = commentsSnapshot.docs.map(doc => { tabComments.push(doc.data().name); });
        
    return tabComments;
}

export async function getNamesOfOpinions(db) {
    let tabOpinions = [];

    const opinionsCol = collection(db, 'opinions-pipingdata.app');

    const opinionsSnapshot = await getDocs(opinionsCol);
    const opinionsList = opinionsSnapshot.docs.map(doc => { tabOpinions.push(doc.data().name); });
        
    return tabOpinions;
}

export async function getComments(db) {
    let tabComments = [];

    const commentsCol = collection(db, 'pipingdata/comments/discussion');

    const commentsSnapshot = await getDocs(commentsCol);
    const commentsList = commentsSnapshot.docs.map(doc => { tabComments.push(doc.data()); });

    //console.log(tabComments);
        
    return tabComments;
}



/*export async function getColComments(db) {
    let tabComments = [];

    const commentsCol = collection(db, 'comments-pipingdata.app');

    const commentsSnapshot = await getDocs(commentsCol);
    const commentsList = commentsSnapshot.docs.map(doc => { tabComments.push(doc.data()); });
        
    return tabComments;
}*/




export async function getOpinions(db) {
    let tabOpinions = [];

    const opinionsCol = collection(db, 'opinions-pipingdata.app');

    const opinionsSnapshot = await getDocs(opinionsCol);
    const opinionsList = opinionsSnapshot.docs.map(doc => { tabOpinions.push(doc.data()); });
        
    return tabOpinions;
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
    let newDate = new Date();

    let day = newDate.getDay();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let hour = String(newDate.getHours()).padStart(2, '0');
    let minute = String(newDate.getMinutes()).padStart(2, '0');

    let dateNow = `${days[day]} ${date} ${months[month]} ${year} à ${hour}:${minute}`;

    let addComments = [];
    
    const docRef = collection(db, `pipingdata/comments/discussion`);

    const qDocRef = query(docRef, orderBy("id_discussion", "desc"));

    const docSnap = await getDocs(qDocRef);

    docSnap.docs.map(element => {
        addComments.push(element);
    });

    let id_discussion = Number(addComments.length + 1);

    addDoc(docRef, {
        id_discussion,
        name: "youssef",
        comment: userData.comment,
        job: "pipefitter",
        archived: false,
        date: dateNow,
        admin: false
    });

    const q = query(collection(db, `pipingdata/comments/discussion`), orderBy("id_discussion", "desc"));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      
    })
}




export async function responseComments(db, userData) { 
    let newDate = new Date();

    let day = newDate.getDay();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let hour = String(newDate.getHours()).padStart(2, '0');
    let minute = String(newDate.getMinutes()).padStart(2, '0');

    let dateNow = `${days[day]} ${date} ${months[month]} ${year} à ${hour}:${minute}`;

    let addComments = [];
    
    const docRef = collection(db, `pipingdata/comments/discussion`);

    const qDocRef = query(docRef, orderBy("id_discussion", "desc"));

    const docSnap = await getDocs(qDocRef);

    docSnap.docs.map(element => {
        addComments.push(element);
    });

    let id_discussion = Number(addComments.length + 1);

    addDoc(docRef, {
        id: userData.id,
        id_discussion_admin: Number(userData.id_discussion_admin),
        name: "admin",
        comment: userData.comment,
        archived: true,
        date: dateNow,
        admin: userData.admin
    });

    /*const q = query(docRef, where("id_discussion", "==", id_discussion));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      
      /*addDoc(docRef, {
        id_discussion,
        name: "youssef",
        comment: userData.comment,
        job: "pipefitter",
        archived: false,
        date: dateNow
    });
    })*/
}




export async function addOpinions(db, userData) { 
    const opinionsCol = collection(db, 'opinions-pipingdata.app');

    let newDate = new Date();

    let day = newDate.getDay();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();

    let dateNow = `${days[day]} ${date} ${months[month]} ${year} à ${hour}:${minute}`;
        
    addDoc(opinionsCol, {
        name: userData.name,
        opinion: userData.opinion,
        date: dateNow
    });
}




