import { defineStore } from "pinia";

interface State {
  state: boolean;
}

export const useEditTalkModalStore = defineStore("createEditModal", {
  state: (): State => ({
    state: false,
  }),
  getters: {
    state: (state) => state.state,
  },
  actions: {
    changeState(newState: boolean) {
      this.state = newState;
    },
  },
});
