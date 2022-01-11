<template>
  <div class="main">
    <Container>
      <h1>Hello, world!</h1>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Container from "~/components/layout/Container.vue";

export default defineComponent({
  components: {
    Container,
  },
});
</script>
