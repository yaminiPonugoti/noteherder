import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCeV2hyefSc2NCrTMaK_6pfpZc0CcvOwwE",
  authDomain: "noteherder-b96ed.firebaseapp.com",
  databaseURL: "https://noteherder-b96ed.firebaseio.com",
  projectId: "noteherder-b96ed",
  storageBucket: "noteherder-b96ed.appspot.com",
  messagingSenderId: "685444276891"
};
const app = firebase.initializeApp(config)

export const githubProvider = new firebase.auth.GithubAuthProvider()
export const auth = firebase.auth()

export const googleProvider = new firebase.auth.GoogleAuthProvider()

export default Rebase.createClass(app.database())