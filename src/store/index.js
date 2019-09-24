import { extendObservable, action } from "mobx";
import db from "./firebase";
import isEqual from "lodash.isequal";
import parseGameRoom from "../utils/parse-game-room";
import { doubleShuffle } from "../utils/array-utils";
import { shuffle } from "../utils/array-utils";

const emptyStringArray = length => new Array(length).fill("");
const isValid = elem => elem !== "";
const isNotMyself = elem => elem.toLowerCase() !== "myself";
const isNotMe = elem => elem.toLowerCase() !== "me";
const frontEndVersionString = process.env.REACT_APP_VERSION.replace(/\./g, "-");

class GameData {
  constructor() {
    extendObservable(this, {
      // add stuff here to rerender when changed (i.e medium)
      lastSaved: null,
      hasUserPermission: true,
      gameRoom: parseGameRoom(),
      passion: "",
      purpose: "",
      chosenPassionIndex: 0,
      chosenPurposeIndex: 0,
      medium: "",
      action: "",
      chosenMediumIndex: 0
    });

    this.passionPrompts = [
      "I am a fan of...",
      "I spend my time...",
      "I am good at...",
      "I want to learn more about..."
    ];

    this.purposePrompts = [
      "I want to advocate for...",
      "I want to protest...",
      "I want to challenge...",
      "I want to help others overcome..."
    ];

    this.mediumOptions = [
      "3D Printing",
      "Audio & Sound Art",
      "Arduino",
      "Art",
      "Citizen Science",
      "Computer Science",
      "Comedy",
      "Community Organizing",
      "Cooking",
      "Drafting",
      "Dance",
      "Design",
      "Digital Storytelling",
      "Hair & Makeup",
      "Fine Art",
      "Games",
      "Gardening/Farming",
      "Jewelry Design",
      "Journalism",
      "Social Media",
      "Publishing",
      "Robotics",
      "Maker Culture",
      "VR/AR",
      "Murals/Public Art"
    ];

    this.passionStore = new ResponsesStore(this, this.passionPrompts);

    // All must start with "I want to "
    this.purposeStore = new ResponsesStore(this, this.purposePrompts);
  }

  setPurpose = action(purposeString => {
    this.purpose = purposeString;
  });

  setPassion = action(passionString => {
    this.passion = passionString;
  });

  setMedium = action(mediumString => {
    this.medium = mediumString;
    console.log(mediumString);
  });

  setAction = action(actionString => {
    this.action = actionString;
    console.log(actionString);
  });

  incrementPassionIndex = action(() => {
    if (this.chosenPassionIndex < this.passionStore.numQuestions - 1) {
      this.chosenPassionIndex++;
    } else {
      this.chosenPassionIndex = 0;
    }
  });

  incrementPurposeIndex = action(() => {
    if (this.chosenPurposeIndex < this.purposeStore.numQuestions - 1) {
      this.chosenPurposeIndex++;
    } else {
      this.chosenPurposeIndex = 0;
    }
  });

  shufflePassions = action(() => {
    shuffle(this.passionStore.responses);
  });

  shufflePurposes = action(() => {
    doubleShuffle(this.purposeStore.responses, this.purposePrompts);
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
        const passionPrompts = this.passionPrompts;
        const purposePrompts = this.purposePrompts;
        const chosenPassionIndex = this.chosenPassionIndex;
        const chosenPurposeIndex = this.chosenPurposeIndex;
        db.saveResponses(
          this.responseRef,
          frontEndVersionString,
          this.gameRoom,
          passionPrompts,
          purposePrompts,
          dataToSave.passionResponses,
          dataToSave.purposeResponses,
          chosenPassionIndex,
          chosenPurposeIndex,
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
    return this.responses.every(response => isNotMyself(response) && isNotMe(response));
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
