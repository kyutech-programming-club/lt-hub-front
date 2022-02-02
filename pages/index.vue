<template>
  <div class="main">
    <Container>
      <h1>Hello, world!</h1>
      <button @click="signin">ahiahi</button>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Container from "~/components/layout/Container.vue";
import { useAuthStore } from "~/store/auth";

export default defineComponent({
  components: {
    Container,
  },
  setup() {
    const authStore = useAuthStore();
    const signin = () => {
      authStore.signIn();
    };

    return { signin };
  },
});
</script>
