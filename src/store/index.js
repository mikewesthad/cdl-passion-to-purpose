import { extendObservable, action } from "mobx";
import db from "./firebase";
import isEqual from "lodash.isequal";
import parseGameRoom from "../utils/parse-game-room";
import { range, generateCombinations } from "../utils/array-utils";

const emptyStringArray = length => new Array(length).fill("");
const isValid = elem => elem !== "";
const isMyself = elem => elem !== "myself";
const isMe = elem => elem !== "me";
const frontEndVersionString = process.env.REACT_APP_VERSION.replace(/\./g, "-");

class GameData {
  constructor() {
    extendObservable(this, {
      // add stuff here to rerender when changed (i.e medium)
      lastSaved: null,
      hasUserPermission: true,
      gameRoom: parseGameRoom(),
      combinations: [],
      passion: "",
      purpose: "",
      passionPrompts: [],
      purposePrompts: []
    });

    this.passionStore = new ResponsesStore(this, [
      "I am a fan of...",
      "I spend my time...",
      "I am good at...",
      "I want to learn more about..."
    ]);

    // All must start with "I want to "
    this.purposeStore = new ResponsesStore(this, [
      "I want to advocate for...",
      "I want to protest...",
      "I want to challenge...",
      "I want to help others overcome..."
    ]);

    this.passionPromptStore = [
      "I am a fan of...",
      "I spend my time...",
      "I am good at...",
      "I want to learn more about..."
    ];

    this.purposePromptStore = [
      "I want to advocate for...",
      "I want to protest...",
      "I want to challenge...",
      "I want to help others overcome..."
    ];
  }

  generateCombinations = action(() => {
    const passionIndices = range(0, this.passionStore.numQuestions);
    const purposeIndices = range(0, this.purposeStore.numQuestions);
    this.combinations = generateCombinations(passionIndices, purposeIndices);
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
        passionResponses: this.passionStore.toJSON(),
        purposeResponses: this.purposeStore.toJSON()
      };
      if (!isEqual(dataToSave, this.lastSaved)) {
        const stringCombos = JSON.stringify(this.combinations);
        this.responseRef = db.getResponseRef(frontEndVersionString, this.gameRoom);
        const passionPrompts = JSON.stringify(this.passionPromptStore);
        const purposePrompts = JSON.stringify(this.passionPromptStore);
        db.saveResponses(
          this.responseRef,
          frontEndVersionString,
          this.gameRoom,
          passionPrompts,
          purposePrompts,
          dataToSave.passionResponses,
          dataToSave.purposeResponses,
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
    return this.responses.every(isValid && isMyself && isMe);
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
