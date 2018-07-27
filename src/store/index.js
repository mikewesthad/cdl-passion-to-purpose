import { extendObservable, observable, action, autorun } from "mobx";
import syncToStorage from "./sync-to-storage";
import firebase from "../utils/firebase";
import isEqual from "lodash.isequal";

const database = firebase.database();
const emptyStringArray = length => new Array(length).fill("");
const isValid = elem => elem !== "";

class GameData {
  @observable lastSaved = null;

  constructor() {
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

  saveToFirebase() {
    const dataToSave = {
      passions: this.passionStore.toJSON(),
      purposes: this.purposeStore.toJSON(),
      timestamp: firebase.database.ServerValue.TIMESTAMP
    };
    if (!isEqual(dataToSave, this.lastSaved)) {
      try {
        database
          .ref()
          .push()
          .set(dataToSave);
        this.lastSaved = dataToSave;
      } catch (e) {}
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

  // Controlled Serialization
  toJSON() {
    return {
      passions: this.passionStore.toJSON(),
      purposes: this.purposeStore.toJSON(),
      lastSaved: this.lastSaved
    };
  }
  fromJSON(json) {
    if (json.passions) this.passionStore.fromJSON(json.passions);
    if (json.purposes) this.purposeStore.fromJSON(json.purposes);
    if (json.lastSaved) this.lastSaved = json.lastSaved;
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

  @action
  setResponse = (i, response) => {
    this.responses[i] = response;
  };
  @action
  setResponses = responses => {
    this.responses = responses;
  };
  @action
  reset() {
    this.responses = emptyStringArray(this.numQuestions);
  }
}

const store = new GameData();

// autorun(() => {
//   console.log(store.passionStore.responses.slice());
//   console.log(store.purposeStore.responses.slice());
// });

syncToStorage("passion-to-purpose-data", store);

export default store;
