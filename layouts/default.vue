<template>
  <div>
    <Header />
    <button @click="login">ahiahi</button>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Header from "~/components/shared/Header/index.vue";
import { useAuthStore } from "~/store/auth";

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const authStore = useAuthStore();
    authStore.getAuthState();
    const login = () => {
      authStore.login();
    };

    return { login };
  },
});
</script>

<style lang="scss">
html {
  background: $black-lighten-4;
  color: $black;
  font-size: 10px;
  font-weight: 400;
  font-family: $noto-sans, $open-sans, $montserrat, $noto-serif;
  word-spacing: 1px;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
