import { extendObservable, action } from "mobx";
import syncToStorage from "./sync-to-storage";
import db from "./firebase";
import isEqual from "lodash.isequal";
import parseGameRoom from "../utils/parse-game-room";

const emptyStringArray = length => new Array(length).fill("");
const isValid = elem => elem !== "";
const frontEndVersionString = process.env.REACT_APP_VERSION.replace(/\./g, "-");

class GameData {
  constructor() {
    extendObservable(this, {
      lastSaved: null,
      hasUserPermission: true,
      gameRoom: parseGameRoom()
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

  saveToFirebase() {
    if (this.hasUserPermission) {
      const dataToSave = {
        passions: this.passionStore.toJSON(),
        purposes: this.purposeStore.toJSON()
      };
      if (!isEqual(dataToSave, this.lastSaved)) {
        db.saveResponses(
          frontEndVersionString,
          this.gameRoom,
          dataToSave.passions,
          dataToSave.purposes
        ).catch(console.log);
        this.lastSaved = dataToSave;
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

// No need to sync to storage right now - the game should start fresh on page reload
// syncToStorage("passion-to-purpose-data", store);

export default store;
