import firebase from "firebase/app";
import "firebase/database";

const now = firebase.database.ServerValue.TIMESTAMP;

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PRODJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID
};
firebase.initializeApp(config);

class FirebaseDatabase {
  constructor(db) {
    this.db = db;
  }

  getResponseRef(versionString, roomName) {
    const responseRef = this.db.ref(`rooms/${roomName}/${versionString}/responses`).push();
    return responseRef;
  }

  saveResponses(responseRef, versionString, roomName, passions, purposes, combinations) {
    const p1 = responseRef.set({
      passions,
      purposes,
      timestamp: now,
      combinations
    });
    const p2 = this.db.ref(`roomDirectory/${roomName}/${versionString}/updatedAt`).set(now);
    return Promise.all([p1, p2]);
  }
}

const db = new FirebaseDatabase(firebase.database());

export default db;
