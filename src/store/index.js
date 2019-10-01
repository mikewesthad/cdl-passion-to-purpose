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
      "Sticker Art",
      "A Virtual or Augmented Reality Experience",
      "A Citizen Journalism Project",
      "A Remix or Mashup",
      "Shareable social media content",
      "A Video or Animation",
      "A Business",
      "A Toy",
      "Fashion",
      "A Map",
      "A Community Gathering",
      "A Podcast"
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
      ],
      "Sticker Art": [
        {
          exampleName: "Protest Sticker Art",
          image: require("../images/MediaExampleImages/sticker-icon.svg"),
          link: "https://www.redbubble.com/shop/protest+art+stickers"
        }
      ],
      "A Virtual or Augmented Reality Experience": [
        {
          exampleName: "The Wall",
          image: require("../images/MediaExampleImages/vr-icon.svg"),
          link:
            "https://www.usatoday.com/border-wall/usa-today-network-border-project-about-vr-podcasts-map/vr"
        }
      ],
      "A Citizen Journalism Project": [
        {
          exampleName: "Wikipedia Edit-a-thon",
          image: require("../images/MediaExampleImages/writing-icon.svg"),
          link: "https://www.moma.org/calendar/events/5229?locale=en"
        }
      ],
      "A Remix or Mashup": [
        {
          exampleName: "Hacking My Media with X-Ray Goggles",
          image: require("../images/MediaExampleImages/code-xray-icon.svg"),
          link: "https://thimbleprojects.org/stephguthrie/48361/"
        }
      ],
      "Shareable social media content": [
        {
          exampleName: "Meme Generator",
          image: require("../images/MediaExampleImages/dab-icon.svg"),
          link: "https://imgflip.com/memegenerator"
        }
      ],
      "A Video or Animation": [
        {
          exampleName: "An Animated GIF Collection",
          image: require("../images/MediaExampleImages/gif-icon.svg"),
          link: "https://raf-i-a.tumblr.com/tagged/GIF"
        }
      ],
      "A Business": [
        {
          exampleName: "Conflict Kitchen",
          image: require("../images/MediaExampleImages/food-icon.svg"),
          link: "https://www.conflictkitchen.org/"
        }
      ],
      "A Toy": [
        {
          exampleName: "Yoga Joes",
          image: require("../images/MediaExampleImages/toy-icon.svg"),
          link: "https://www.yogajoes.com/"
        }
      ],
      "A Fashion Project": [
        {
          exampleName: "Face Camouflage",
          image: require("../images/MediaExampleImages/mask-icon.svg"),
          link: "https://cvdazzle.com/"
        }
      ],
      "A Map": [
        {
          exampleName: "Reparations Map",
          image: require("../images/MediaExampleImages/map-icon.svg"),
          link:
            "https://www.google.com/maps/d/u/0/viewer?ll=36.04297229383506%2C-77.67547230820321&z=11&mid=1YvB3PuH8jeR_yoFCLvrKOTQQ3p_5NmkK"
        }
      ],
      "A Community Gathering": [
        {
          exampleName: "Campaign for Immigration Reform",
          image: require("../images/MediaExampleImages/immigration-icon.svg"),
          link: "https://www.buycott.com/campaign/1145/promote-immigration-reform"
        }
      ],
      "A Podcast": [
        {
          exampleName: "Adult-ish Podcast",
          image: require("../images/MediaExampleImages/podcast-icon.svg"),
          link: "https://yr.media/adult-ish/"
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
