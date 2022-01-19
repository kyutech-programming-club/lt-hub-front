import { defineStore } from "pinia";

interface State {
  state: boolean;
}

export const useEditTalkModalStore = defineStore("createEditModal", {
  state: (): State => ({
    state: false,
  }),
  actions: {
    changeState(newState: boolean) {
      this.state = newState;
    },
  },
});
