import { extendObservable, action } from "mobx";
import db from "./firebase";
import isEqual from "lodash.isequal";
import parseGameRoom from "../utils/parse-game-room";
import { range, generateCombinations } from "../utils/array-utils";

const emptyStringArray = length => new Array(length).fill("");
const isValid = elem => elem !== "";
const frontEndVersionString = process.env.REACT_APP_VERSION.replace(/\./g, "-");

class GameData {
  constructor() {
    extendObservable(this, {
      lastSaved: null,
      hasUserPermission: true,
      gameRoom: parseGameRoom(),
      combinations: []
    });

    this.passionStore = new ResponsesStore(this, [
      "I like to make",
      "I have a background in",
      "I spend my time"
    ]);

    // All must start with "I want to "
    this.purposeStore = new ResponsesStore(this, [
      "I want to say something about",
      "I want to challenge",
      "I want to express"
    ]);

    this.actionStore = new ResponsesStore(this, ["I want to"]);

    this.mediumStore = new ResponsesStore(this, ["", ""]);
  }

  generateCombinations = action(() => {
    const passionIndices = range(0, this.passionStore.numQuestions);
    const purposeIndices = range(0, this.purposeStore.numQuestions);
    const mediumIndices = range(0, this.mediumStore.numQuestions);
    this.combinations = generateCombinations(passionIndices, purposeIndices, mediumIndices);
  });

  saveToFirebase() {
    if (this.hasUserPermission) {
      const dataToSave = {
        passions: this.passionStore.toJSON(),
        purposes: this.purposeStore.toJSON(),
        actions: this.actionStore.toJSON()
      };
      if (!isEqual(dataToSave, this.lastSaved)) {
        const stringCombos = JSON.stringify(this.combinations);
        this.responseRef = db.getResponseRef(frontEndVersionString, this.gameRoom);
        db.saveResponses(
          this.responseRef,
          frontEndVersionString,
          this.gameRoom,
          dataToSave.passions,
          dataToSave.purposes,
          dataToSave.actions,
          stringCombos
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
    this.actionStore.reset();
  }

  setUserPermission = action(hasPermission => {
    this.hasUserPermission = hasPermission;
  });

  // Controlled Serialization
  toJSON() {
    return {
      passions: this.passionStore.toJSON(),
      purposes: this.purposeStore.toJSON(),
      actions: this.actionStore.toJSON(),
      hasUserPermission: this.hasUserPermission,
      lastSaved: this.lastSaved
    };
  }
  fromJSON(json) {
    if (json.passions) this.passionStore.fromJSON(json.passions);
    if (json.purposes) this.purposeStore.fromJSON(json.purposes);
    if (json.actions) this.actionStore.fromJSON(json.actions);

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

// Testing
// store.passionStore.setResponses(["cooking", "Lego", "video games", "photography", "comedy"]);
// store.purposeStore.setResponses([
//   "immigration policies",
//   "police brutality",
//   "schools",
//   "affordable housing",
//   "voting habits"
// ]);

export default store;
