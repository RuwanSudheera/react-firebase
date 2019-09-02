import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCieM2LJ5dVCHHVdxx9i8lIufKeQGxGj7Y",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://djamware-4b39e.firebaseio.com",
    projectId: "djamware-4b39e",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "1022818426113"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
