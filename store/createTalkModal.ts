import { defineStore } from "pinia";

interface State {
  state: boolean;
}

export const useCreateTalkModal = defineStore("createTalkModal", {
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
