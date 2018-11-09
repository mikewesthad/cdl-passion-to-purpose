import { extendObservable, action } from "mobx";
import syncToStorage from "./sync-to-storage";
import firebase from "../utils/firebase";
import isEqual from "lodash.isequal";

const database = firebase.database();
const emptyStringArray = length => new Array(length).fill("");
const isValid = elem => elem !== "";
const frontEndVersionString = process.env.REACT_APP_VERSION.replace(/\./g, "-");

class GameData {
  constructor() {
    extendObservable(this, {
      lastSaved: null,
      hasUserPermission: true,
      gameRoom: "default"
    });

    this.passionStore = new ResponsesStore(this, [
      "I spend my time",
      "I am really good at",
      "I talk to my friends about",
      "I spend my money on",
      "I am a fan of"
    ]);

    // All must start with "I want to "
    this.purposeStore = new ResponsesStore(this, [
      "I want to challenge",
      "I want to protest",
      "I want to improve",
      "I want to advocate for",
      "I want to change"
    ]);
  }

  async saveToFirebase() {
    if (this.hasUserPermission) {
      const dataToSave = {
        passions: this.passionStore.toJSON(),
        purposes: this.purposeStore.toJSON(),
        timestamp: firebase.database.ServerValue.TIMESTAMP
      };
      if (!isEqual(dataToSave, this.lastSaved)) {
        try {
          const p1 = database
            .ref(`${frontEndVersionString}/rooms/${this.gameRoom}/responses`)
            .push()
            .set(dataToSave);
          const p2 = database
            .ref(`roomListing/${this.gameRoom}/${frontEndVersionString}/updatedAt`)
            .set(firebase.database.ServerValue.TIMESTAMP);
          await Promise.all([p1, p2]);
          this.lastSaved = dataToSave;
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  getPurposesWithVerb() {
    return this.purposeStore.responses.map(
      (purpose, i) => this.purposeStore.questions[i].replace("I want to ", "") + " " + purpose
    );
  }

  reset() {
    this.passionStore.reset();
    this.purposeStore.reset();
  }

  setUserPermission = action(hasPermission => {
    this.hasUserPermission = hasPermission;
  });

  // Controlled Serialization
  toJSON() {
    return {
      passions: this.passionStore.toJSON(),
      purposes: this.purposeStore.toJSON(),
      hasUserPermission: this.hasUserPermission,
      lastSaved: this.lastSaved
    };
  }
  fromJSON(json) {
    if (json.passions) this.passionStore.fromJSON(json.passions);
    if (json.purposes) this.purposeStore.fromJSON(json.purposes);
    if (json.lastSaved) this.lastSaved = json.lastSaved;
    if (json.hasUserPermission !== undefined) this.hasUserPermission = json.hasUserPermission;
  }
}

class ResponsesStore {
  constructor(rootStore, questions) {
    this.rootStore = rootStore;
    this.questions = questions;
    this.numQuestions = questions.length;

    extendObservable(this, {
      responses: emptyStringArray(this.numQuestions)
    });
  }

  getQuestions() {
    return this.questions;
  }
  isResponseValid(i) {
    return isValid(this.responses[i]);
  }
  areAllResponsesValid() {
    return this.responses.every(isValid);
  }
  toJSON() {
    return this.responses.slice();
  }
  fromJSON(json) {
    if (json.length) this.setResponses(json.slice(0, this.numQuestions));
  }

  setResponse = action((i, response) => {
    this.responses[i] = response;
  });
  setResponses = action(responses => {
    this.responses = responses;
  });
  reset = action(() => {
    this.responses = emptyStringArray(this.numQuestions);
  });
}

const store = new GameData();

// autorun(() => {
//   console.log(store.passionStore.responses.slice());
//   console.log(store.purposeStore.responses.slice());
// });

syncToStorage("passion-to-purpose-data", store);

export default store;
