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
      // add stuff here to rerender when changed (i.e medium)
      lastSaved: null,
      hasUserPermission: true,
      gameRoom: parseGameRoom(),
      combinations: [],
      medium: "",
      action: "",
      passion: "",
      purpose: ""
    });

    this.passionStore = new ResponsesStore(this, [
      "I am a fan of...",
      "I spend my time...",
      "I am good at...",
      "I want to learn how to..."
    ]);

    // All must start with "I want to "
    this.purposeStore = new ResponsesStore(this, [
      "I want to advocate for...",
      "I want to protest...",
      "I want to challenge...",
      "I want to help others overcome..."
    ]);

    this.actionStore = new ResponsesStore(this, ["I want to"]);

    this.mediumStore = new ResponsesStore(this, [""]);

    this.audienceStore = new ResponsesStore(this, [""]);
  }

  generateCombinations = action(() => {
    const passionIndices = range(0, this.passionStore.numQuestions);
    const purposeIndices = range(0, this.purposeStore.numQuestions);
    const mediumIndices = range(0, this.mediumStore.numQuestions);
    const actionIndices = range(0, this.actionStore.numQuestions);
    const audienceIndices = range(0, this.audienceStore.numQuestions);
    this.combinations = generateCombinations(
      passionIndices,
      purposeIndices,
      mediumIndices,
      actionIndices,
      audienceIndices
    );
  });

  setMedium = action(mediumString => {
    this.medium = mediumString;
  });

  setAction = action(actionString => {
    this.action = actionString;
  });

  setPurpose = action(purposeString => {
    this.purpose = purposeString;
    //console.log("purpose value: " + this.purpose);
  });

  setPassion = action(passionString => {
    this.passion = passionString;
  });

  saveToFirebase() {
    if (this.hasUserPermission) {
      const dataToSave = {
        passions: this.passionStore.toJSON(),
        purposes: this.purposeStore.toJSON(),
        actions: this.actionStore.toJSON(),
        mediums: this.mediumStore.toJSON(),
        audiences: this.audienceStore.toJSON()
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
          dataToSave.mediums,
          dataToSave.audiences,
          stringCombos
        ).catch(console.log);
        this.lastSaved = dataToSave;
      }
    }
  }

  //takes the wording after "I want to" for the HMW generation
  getPurposesWithVerb() {
    return this.purposeStore.responses.map(
      (purpose, i) =>
        this.purposeStore.questions[i].replace("I want to ", "").replace("...", "") + " " + purpose
    );
  }

  reset() {
    this.passionStore.reset();
    this.purposeStore.reset();
    this.actionStore.reset();
    this.mediumStore.reset();
    this.audienceStore.reset();
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
      mediums: this.mediumStore.toJSON(),
      audiences: this.audienceStore.toJSON(),

      hasUserPermission: this.hasUserPermission,
      lastSaved: this.lastSaved
    };
  }
  fromJSON(json) {
    if (json.passions) this.passionStore.fromJSON(json.passions);
    if (json.purposes) this.purposeStore.fromJSON(json.purposes);
    if (json.actions) this.actionStore.fromJSON(json.actions);
    if (json.mediums) this.mediumStore.fromJSON(json.mediums);
    if (json.audiences) this.audienceStore.fromJSON(json.audiences);

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
/*
//Testing;

store.passionStore.setResponses(["food", "Lego", "video games", "beyonce"]);
store.purposeStore.setResponses([
  "immigration policies",
  "police brutality",
  "poverty in America",
  "testing"
]);
*/
export default store;
