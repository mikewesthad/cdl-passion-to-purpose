import firebase from "firebase/app";
import "firebase/database";

const now = firebase.database.ServerValue.TIMESTAMP;

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
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

  saveResponses(
    responseRef,
    versionString,
    roomName,
    PassionPrompts,
    PurposePrompts,
    passionResponses,
    purposeResponses,
    chosenPassion,
    chosenPurpose,
    combinations
  ) {
    // add medium, aduience, action from store
    const p1 = responseRef.set({
      passionResponses,
      purposeResponses,
      PassionPrompts,
      PurposePrompts,
      chosenPassion,
      chosenPurpose,
      timestamp: now,
      combinations
    });
    const p2 = this.db.ref(`roomDirectory/${roomName}/${versionString}/updatedAt`).set(now);
    return Promise.all([p1, p2]);
  }
}

const db = new FirebaseDatabase(firebase.database());

export default db;
