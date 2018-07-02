import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "XXXXXXXXX",
  authDomain: "passion-to-purpose.firebaseapp.com",
  databaseURL: "https://passion-to-purpose.firebaseio.com",
  projectId: "passion-to-purpose",
  storageBucket: "",
  messagingSenderId: "975548954395"
};
export default firebase.initializeApp(config);
