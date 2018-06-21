import { extendObservable, observable, action, computed, autorun } from "mobx";
import syncToStorage from "./sync-to-storage";

const numQuestions = 6;
const emptyStringArray = length => new Array(length).fill("");
const isValid = elem => elem !== "";
class GameData {
  constructor() {
    this.passionStore = new ResponsesStore(this, [
      "I spend my time",
      "I am really good at",
      "I talk to my friends about",
      "I spend my money on",
      "I am a fan of",
      "I read all about"
    ]);

    this.purposeStore = new ResponsesStore(this, [
      "Challenge",
      "Raise awareness about",
      "Protest",
      "Improve",
      "Advocate for",
      "Change"
    ]);
  }

  reset() {
    this.passionStore.reset();
    this.purposeStore.reset();
  }

  // Controlled Serialization
  toJSON() {
    return {
      passions: this.passionStore.toJSON(),
      purposes: this.purposeStore.toJSON()
    };
  }
  fromJSON(json) {
    if (json.passions) this.passionStore.fromJSON(json.passions);
    if (json.purposes) this.purposeStore.fromJSON(json.purposes);
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
    this.setResponses(json);
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

// const store = new GameStore();
const store = new GameData();

autorun(() => {
  console.log(store.passionStore.responses.slice());
  console.log(store.purposeStore.responses.slice());
});

syncToStorage("passion-to-purpose-data", store);

export default store;
