import { observable, action } from "mobx";
import syncToStorage from "./sync-to-storage";

class GameStore {
  @observable passions = [];
  @observable purposes = [];

  @action
  reset = () => {
    this.passions = [];
    this.purposes = [];
  };

  @action
  setPassions = passions => {
    this.passions = passions;
  };
  @action
  setPurposes = purposes => {
    this.purposes = purposes;
  };

  // Controlled serialization
  toJSON() {
    return {
      passions: this.passions,
      purposes: this.purposes
    };
  }
}

const store = new GameStore();

syncToStorage("passion-to-purpose-data", store);

export default store;
