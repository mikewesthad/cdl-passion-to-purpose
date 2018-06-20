import { autorun } from "mobx";
import store from "store";

export default function autoSync(key, gameStore) {
  // First run - initialize storage or load values from storage into gameStore
  const storedData = store.get(key);
  if (storedData === undefined) store.set(key, gameStore);
  else {
    for (const [key, value] of Object.entries(storedData)) {
      gameStore[key] = value;
    }
  }

  // Reactively sync to local storage
  autorun(() => store.set(key, gameStore));
}
