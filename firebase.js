// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDb4Tk2QVWU5fAQU2eRluXhE5w5GEI4qls",
authDomain: "todolist-iniciatec-cs.firebaseapp.com",
projectId: "todolist-iniciatec-cs",
storageBucket: "todolist-iniciatec-cs.appspot.com",
messagingSenderId: "583871979225",
appId: "1:583871979225:web:c17d9d1e4013283f81e8c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) //Nos permite conectarnos con archivos por el type=module

/**
 * saveTask es un metodo que me permite crear una nueva tarea en la coleccion 'todo' y le genera un id automatico por medio de Cloud Firestore.
 * @param {string} title 
 * @param {string} description 
 * @param {number} quantity 
 */
export const saveTask = (title, description, quantity) => {
    /**
     * addDoc es un metodo que nos permite agregar un documento a una coleccion. Tomamos como parametros la coleccion y un objeto con los datos que queremos agregar.
     * @param {string} collection - Nombre de la collection
     * @param {object} data - Objeto con los datos que queremos agregar
     */
    addDoc(collection(db, "todo"), {
        title,
        description,
        quantity
    })
} 
