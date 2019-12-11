import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/firestore';



firebase.initializeApp({
    apiKey: 'AIzaSyBTFA_dbAYxgdpQwTgHefBSGGc8RLcRBYI',
    authDomain: 'react-burger-191209.firebaseapp.com',
    projectId: 'react-burger-191209'
});

const instance = axios.create({
    baseURL: 'https://react-burger-191209.firebaseio.com/users/SjCF1GViFnpZtW85OQdU/'
});

export default instance;