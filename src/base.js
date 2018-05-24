import firebase from 'firebase/app'
import 'firebase/database'
import Rebase from 're-base'
const config = {
    apiKey: "AIzaSyCeV2hyefSc2NCrTMaK_6pfpZc0CcvOwwE",
    authDomain: "noteherder-b96ed.firebaseapp.com",
    databaseURL: "https://noteherder-b96ed.firebaseio.com",
    projectId: "noteherder-b96ed",
    storageBucket: "",
    messagingSenderId: "685444276891"
  };
const app = firebase.initializeApp(config);
export default Rebase.createClass(app.database())
