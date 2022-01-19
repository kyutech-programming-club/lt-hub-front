import { defineStore } from "pinia";

interface State {
  state: boolean;
}

export const useCreateTalkModalStore = defineStore("createTalkModal", {
  state: (): State => ({
    state: false,
  }),
  actions: {
    changeState(newState: boolean) {
      this.state = newState;
    },
  },
});
