import { defineStore } from "pinia";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { CurrentUser } from "~/types";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const useAuthStore = defineStore("auth", {
  state: (): CurrentUser => ({
    token: null,
    userId: null,
    avatarUrl: null,
  }),
  getters: {
    isLoading(state) {
      return !!state.token;
    },
  },
  actions: {
    async signIn() {
      try {
        const res: UserCredential = await signInWithPopup(auth, provider);

        console.log(res);
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
});
