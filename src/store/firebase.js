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

  saveResponses(versionString, roomName, passions, purposes) {
    const p1 = this.db
      .ref(`rooms/${versionString}/${roomName}/responses`)
      .push()
      .set({ passions, purposes, timestamp: now });
    const p2 = this.db.ref(`roomDirectory/${versionString}/${roomName}/updatedAt`).set(now);
    return Promise.all([p1, p2]);
  }
}

const db = new FirebaseDatabase(firebase.database());

export default db;
