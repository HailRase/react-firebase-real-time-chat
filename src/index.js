import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAWVLzqbeIcdWSmE1NW3AtMvdxrB5-gjkQ",
    authDomain: "chat-react-eabc0.firebaseapp.com",
    projectId: "chat-react-eabc0",
    storageBucket: "chat-react-eabc0.appspot.com",
    messagingSenderId: "767047061034",
    appId: "1:767047061034:web:f0f82bff7a8dc5748bfd53",
    measurementId: "G-D2SCEHYR3K"
})
export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>
);

reportWebVitals();
