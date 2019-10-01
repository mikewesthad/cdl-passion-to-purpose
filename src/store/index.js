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
      impact: "",
      chosenMediumIndex: 0
    });

    this.passionPrompts = [
      "I am a fan of...",
      "I like to spend my time...",
      "I am good at...",
      "I want to learn more about..."
    ];

    this.purposePrompts = [
      "I want to advocate for...",
      "I want to raise awareness about...",
      "I want to challenge...",
      "I want to help others overcome..."
    ];

    this.mediumOptions = [
      "A Game",
      "A Design",
      "Public or Street Art",
      "A Design",
      "Virtual or Augmented Reality",
      "Citizen journalism",
      "A Remix or Mashup",
      "Shareable social media content",
      "A Video or Animation",
      "A Business",
      "A Design",
      "Fashion",
      "A Map",
      "A Community Gathering",
      "A Podcast",
      "A Community Gathering",
      "Shareable social media content",
      "A Video or Animation"
    ];

    this.mediaExampleData = {
      "A Game": [
        {
          exampleName: "A Gerrymandering Board Game",
          image: require("../images/MediaExampleImages/board-game-icon.svg"),
          link: "http://gerrymanderinggame.com/"
        }
      ],
      "A Design": [
        {
          exampleName: "A Calendar",
          image: require("../images/MediaExampleImages/calendar-icon.svg"),
          link: "https://buyolympia.com/Item/liartownusa-social-justice-kittens-2020"
        }
      ],
      "Public or Street Art": [
        {
          exampleName: "A Playground",
          image: require("../images/MediaExampleImages/playground-icon.svg"),
          link:
            "https://www.designboom.com/architecture/ronald-rael-san-fratello-installs-seesaws-on-us-mexico-border-wall-07-31-2019/"
        }
      ]
    };

    //mediaExampleData["A Game"][0].exampleName;

    this.impactOptions = [
      "Raise Awareness",
      "Build Empathy",
      "Cultivate Community",
      "Celebrate",
      "Foster dialogue",
      "Protect people's rights",
      "Start a movement",
      "Send a message",
      "Change minds",
      "Change habits",
      "Connect people",
      "Create a paradigm shift",
      "Raise up others' voices",
      "Take an action"
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
  });

  setImpact = action(impactString => {
    this.impact = impactString;
    console.log(impactString);
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

//Testing;

store.passionStore.setResponses(["food", "Lego", "video games", "beyonce"]);
store.purposeStore.setResponses([
  "immigration policies",
  "police brutality",
  "poverty in America",
  "testing"
]);

export default store;
