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
      "A Design Project",
      "A Public Performance",
      "A Virtual or Augmented Reality Experience",
      "A Citizen Journalism Project",
      "A Remix or Mashup",
      "Shareable Social Media Content",
      "A Video or Animation",
      "A Business",
      "A Data Visualization or Map",
      "A Podcast",
      "Guerilla Art",
      "A Podcast"
    ];

    this.mediaExampleData = {
      "A Game": [
        {
          exampleName: "A Gerrymandering Board Game",
          image: require("../images/MediaExampleImages/board-game-icon.svg"),
          link: "http://gerrymanderinggame.com/",
          resourceLink: "https://www.instructables.com/id/Build-your-Own-Board-Game/",
          description: "game project description"
        },
        {
          exampleName: "Casual Games for Protesters",
          image: require("../images/MediaExampleImages/game-icon.svg"),
          link: "http://www.protestgames.org/",
          resourceLink: "https://www.digitaltrends.com/gaming/how-to-make-a-video-game/",
          description: "game project description 2"
        }
      ],
      "A Design Project": [
        {
          exampleName: "Protest Sticker Art",
          image: require("../images/MediaExampleImages/sticker-icon.svg"),
          link: "https://www.redbubble.com/shop/protest+art+stickers",
          resourceLink: "https://www.instructables.com/id/Homemade-Stickers/",
          description: "design project description"
        },
        {
          exampleName: "Yoga Joes",
          image: require("../images/MediaExampleImages/toy-icon.svg"),
          link: "https://www.yogajoes.com/",
          resourceLink: "https://www.instructables.com/howto/3d+print/",
          description: "design project description"
        },
        {
          exampleName: "Dreamer Kites",
          image: require("../images/MediaExampleImages/kite-icon.svg"),
          link: "https://artsinachangingamerica.org/miguel-lucianos-dreamer-kites/",
          resourceLink: "https://www.instructables.com/id/A-Garbage-Bag-Kite/",
          description: "design project description"
        },
        {
          exampleName: "Defend Dignity Poster",
          image: require("../images/MediaExampleImages/poster-icon.svg"),
          link: "https://obeyclothing.com/blogs/zine/behind-8220-defend-dignity-8221-q-a",
          resourceLink: "https://kathleentieriton.wixsite.com/studio/advanced-design-illustration",
          description: "design project description"
        }
      ],
      "A Public Performance": [
        {
          exampleName: "Border Wall See Saws",
          image: require("../images/MediaExampleImages/playground-icon.svg"),
          link:
            "https://www.designboom.com/architecture/ronald-rael-san-fratello-installs-seesaws-on-us-mexico-border-wall-07-31-2019/",
          resourceLink:
            "https://www.ana-white.com/woodworking-projects/wood-seesaw-or-teeter-totter",
          description: "design project description"
        },
        {
          exampleName: "Inflatable Refugee",
          image: require("../images/MediaExampleImages/balloon-icon.svg"),
          link: "https://www.dirkschellekens.com/inflatable-refugee/",
          resourceLink: "http://inflatabill.com/portfolio/custom-inflatables-and-props/",
          description: "design project description"
        },
        {
          exampleName: "Red Can Graffiti Jam",
          image: require("../images/MediaExampleImages/spray-paint-icon.svg"),
          link: "https://lakotayouth.org/programs/waniyetu-wowapi-lai/redcan-graffiti-jam/",
          resourceLink: "https://graffitiknowhow.com/how-to-draw-graffiti-letters-for-beginners/",
          description: "design project description"
        }
      ],
      "A Virtual or Augmented Reality Experience": [
        {
          exampleName: "Border Wall Virtual Tour",
          image: require("../images/MediaExampleImages/vr-icon.svg"),
          link:
            "https://www.usatoday.com/border-wall/usa-today-network-border-project-about-vr-podcasts-map/vr",
          resourceLink: "https://vr.google.com/tourcreator/",
          description: "design project description"
        }
      ],
      "A Citizen Journalism Project": [
        {
          exampleName: "Art+Feminisim Wikipedia Edit-a-thon",
          image: require("../images/MediaExampleImages/writing-icon.svg"),
          link: "https://www.moma.org/calendar/events/5229?locale=en",
          resourceLink: "https://outreachdashboard.wmflabs.org/training/editathons",
          description: "design project description"
        },
        {
          exampleName: "Citizen's Police Data Project",
          image: require("../images/MediaExampleImages/cloud-data-icon.svg"),
          link: "https://invisible.institute/police-data",
          resourceLink: "https://vis.occrp.org/",
          description: "design project description"
        }
      ],
      "A Remix or Mashup": [
        {
          exampleName: "Gender Lego Remixes",
          image: require("../images/MediaExampleImages/gender-icon.svg"),
          link: "https://www.youtube.com/user/RemixingGender",
          resourceLink: "http://www.genderremixer.com/html5/",
          description: "design project description"
        }
      ],
      "Shareable Social Media Content": [
        {
          exampleName: "It Gets Better Project",
          image: require("../images/MediaExampleImages/lgbt-icon.svg"),
          link: "https://itgetsbetter.org/",
          resourceLink:
            "https://www.openideo.com/content/4-ideo-designers-tips-for-better-visual-storytelling",
          description: "design project description"
        },
        {
          exampleName: "Hashtag Activism",
          image: require("../images/MediaExampleImages/hashtag-icon.svg"),
          link: "https://knowyourmeme.com/memes/events/title-ix-sex-definition-controversy/photos",
          resourceLink: "https://ourdataourselves.tacticaltech.org/posts/23_guide_social_media",
          description: "design project description"
        },
        {
          exampleName: "Sustainable Fashion Blog",
          image: require("../images/MediaExampleImages/blog-icon.svg"),
          link: "https://www.instagram.com/tollydollyposh/",
          resourceLink: "https://edu.gcfglobal.org/en/instagram/",
          description: "design project description"
        }
      ],
      "A Video or Animation": [
        {
          exampleName: "An Animated GIF Collection",
          image: require("../images/MediaExampleImages/gif-icon.svg"),
          link: "https://raf-i-a.tumblr.com/tagged/GIF",
          resourceLink: "https://giphy.com/create/gifmaker",
          description: "design project description"
        },
        {
          exampleName: "Friends Forever",
          image: require("../images/MediaExampleImages/film-icon.svg"),
          link: "https://www.youtube.com/watch?v=ck04Rqkp_lA",
          resourceLink: "http://giveme5ri.org/film-making-labs/make-your-own/",
          description: "design project description"
        },
        {
          exampleName: "Rights Lab Web Video Series",
          image: require("../images/MediaExampleImages/video-icon.svg"),
          link: "http://www.scrappersfg.com/rightslab/",
          resourceLink: "https://www.wordstream.com/blog/ws/2014/03/13/explainer-videos",
          description: "design project description"
        }
      ],
      "A Data Visualization or Map": [
        {
          exampleName: "Reparations Map",
          image: require("../images/MediaExampleImages/map-icon.svg"),
          link:
            "https://www.google.com/maps/d/u/0/viewer?ll=36.04297229383506%2C-77.67547230820321&z=11&mid=1YvB3PuH8jeR_yoFCLvrKOTQQ3p_5NmkK",
          resourceLink: "",
          description: "design project description"
        },
        {
          exampleName: "The Beyonce Experience",
          image: require("../images/MediaExampleImages/world-map-icon.svg"),
          link:
            "https://public.tableau.com/profile/jaquina.m#!/vizhome/TheBeyonceExperience/TheBeyonceExperience2",
          resourceLink: "https://www.tableau.com/learn/training",
          description: "design project description"
        }
      ],
      "A Podcast": [
        {
          exampleName: "Adult-ish Podcast",
          image: require("../images/MediaExampleImages/podcast-icon.svg"),
          link: "https://yr.media/adult-ish/",
          resourceLink: "",
          description: "design project description"
        },
        {
          exampleName: "SheCast Podcast",
          image: require("../images/MediaExampleImages/podcast-icon.svg"),
          link: "https://www.shecrew.org/she-cast",
          resourceLink:
            "https://www.smartpassiveincome.com/tutorials/start-podcast-pats-complete-step-step-podcasting-tutorial/",
          description: "design project description"
        }
      ],
      Crafts: [
        {
          exampleName: "Social Justice Sewing Circle",
          image: require("../images/MediaExampleImages/sewing-icon.svg"),
          link: "http://www.sjsacademy.com/say-their-names.html",
          resourceLink: "https://www.sewmamasew.com/2010/01/sewing-circles/",
          description: "design project description"
        },
        {
          exampleName: "Femail Upcycling Textile Art",
          image: require("../images/MediaExampleImages/textile-icon.svg"),
          link: "https://femailforever.squarespace.com/",
          resourceLink:
            "https://blog.armoire.style/sustainable-fashion-movement/?utm_source=google&utm_medium=cpc&utm_campaign=armoire+-+brand+l_ME1+7184&utm_term=73120364529-dsa-742279129893&utm_content=348088360311&gclid=Cj0KCQjw8svsBRDqARIsAHKVyqE8Tz2_DgrAqN0-WhjQj6rvtLJioUD84paZYOVAzZDy7ttDuJc9vbcaAuukEALw_wcB",
          description: "design project description"
        }
      ],
      "A Business": [
        {
          exampleName: "Conflict Kitchen",
          image: require("../images/MediaExampleImages/food-icon.svg"),
          link: "https://www.conflictkitchen.org/",
          resourceLink: "https://appetiteforchangemn.org/",
          description: "design project description"
        },
        {
          exampleName: "Farming While Black",
          image: require("../images/MediaExampleImages/farming-icon.svg"),
          link: "https://www.farmingwhileblack.org/",
          resourceLink:
            "https://changecreator.com/the-beginners-guide-to-starting-a-social-business/",
          description: "design project description"
        }
      ],
      "Guerilla Art": [
        {
          exampleName: "Extinction Rebellion",
          image: require("../images/MediaExampleImages/fashion-icon.svg"),
          link:
            "https://www.teenvogue.com/story/extinction-rebellion-collective-yearlong-boycott-buying-new-clothes",
          resourceLink:
            "https://blog.armoire.style/sustainable-fashion-movement/?utm_source=google&utm_medium=cpc&utm_campaign=armoire+-+brand+l_ME1+7184&utm_term=73120364529-dsa-742279129893&utm_content=348088360311&gclid=Cj0KCQjw8svsBRDqARIsAHKVyqE8Tz2_DgrAqN0-WhjQj6rvtLJioUD84paZYOVAzZDy7ttDuJc9vbcaAuukEALw_wcB",
          description: "design project description"
        },
        {
          exampleName: "Under the Radar",
          image: require("../images/MediaExampleImages/radar-icon.svg"),
          link: "http://content.time.com/time/photogallery/0,29307,1911799_1912687,00.html",
          resourceLink: "http://www.kerismith.com/popular-posts/how-to-be-a-guerilla-artist-2/",
          description: "design project description"
        }
      ]
    };

    //mediaExampleData["A Game"][0].exampleName;

    this.impactOptions = [
      "Raise Awareness",
      "Build Empathy",
      "Cultivate Community",
      "Champion a Cause",
      "Foster Dialogue",
      "Protect People's Rights",
      "Start a Movement",
      "Send a message",
      "Change Minds",
      "Change Habits",
      "Connect People",
      "Create a Paradigm Shift",
      "Raise up Others' Voices",
      "Take an Action"
    ];

    this.impactData = {
      "Raise Awareness": [
        {
          definition:
            "To increase public consciousness about pressing or under-represented concerns"
        }
      ],
      "Build Empathy": [
        {
          definition:
            "To help people develop the ability to sense other people's emotions and imagine what someone else might be thinking or feeling."
        }
      ],
      "Cultivate Community": [
        {
          definition:
            "To create solidarity and social belonging among individuals around a common cause or interest."
        }
      ],
      "Champion a Cause": [
        { definition: "To stand up for, uphold, support, back, defend, advocate." }
      ],
      "Foster Dialogue": [
        { definition: "To cultivate a space for exchange of ideas and perspectives." }
      ],
      "Protect People's Rights": [
        { definition: "To defend the civil liberties and human rights of those most vulnerable." }
      ],
      "Start a Movement": [
        {
          definition:
            "To spark or ignite a force for change around a positive and inspiring purpose."
        }
      ],
      "Send a message": [
        { definition: "To use strategic communication to share a persuasive idea or story." }
      ],
      "Change Minds": [
        { definition: "To disrupt confirmation bias or pre-determined beliefs and opinions." }
      ],
      "Change Habits": [
        {
          definition:
            "To support people to contemplate negative behavioral effects and plan new actions for positive improvement."
        }
      ],
      "Connect People": [
        { definition: "To link people together in a community, network or affinity group." }
      ],
      "Create a Paradigm Shift": [
        {
          definition:
            "To radically shift perceptions of how things should be done, made, or thought about."
        }
      ],
      "Raise up Others' Voices": [
        {
          definition:
            "To work to ensure that voices that are often erased and suppressed are amplified, elevated and heard."
        }
      ],
      "Take an Action": [{ definition: "To act positively and decisively to resolve a problem." }]
    };

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

  editPassion = action(newPassionString => {
    if (newPassionString == "") {
      this.passionStore.responses[this.chosenPassionIndex] = "_____";
    } else {
      this.passionStore.responses[this.chosenPassionIndex] = newPassionString;
    }
  });

  editPurpose = action(newPurposeString => {
    if (newPurposeString == "") {
      this.purposeStore.responses[this.chosenPurposeIndex] = "_____";
    } else {
      this.purposeStore.responses[this.chosenPurposeIndex] = newPurposeString;
    }
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
    doubleShuffle(this.passionStore.responses, this.passionPrompts);
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
          this.medium,
          this.impact,
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

  //takes just the verb
  getPurposeVerb() {
    return this.purposeStore.responses.map((purpose, i) =>
      this.purposeStore.questions[i].replace("I want to ", "").replace("...", "")
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

// Testing
// store.passionStore.setResponses(["food", "Lego", "video games", "beyonce"]);
// store.purposeStore.setResponses([
//   "immigration policies",
//   "police brutality",
//   "poverty in America",
//   "testing"
// ]);

export default store;
