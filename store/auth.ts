import { defineStore } from "pinia";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "~/plugins/firebase";
import { CurrentUser } from "~/types";

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
    async login() {
      try {
        await signInWithPopup(auth, provider);
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.$reset();
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    getAuthState() {
      return new Promise(() => {
        onAuthStateChanged(auth, async (user) => {
          try {
            const token = await user?.getIdToken();
            console.log(token);
            /*
              if token === undifined
                stateすべてにnull
                redirect(/home)
              else
                "/login" にアクセス
                if ユーザーあり
                  stateにセット
                else
                  POST /users でユーザー作る
                  デフォちをstateに追加
                  redirect(/signup)
            */
          } catch (err) {
            console.error(err);
            throw err;
          }
        });
      });
    },
  },
});
