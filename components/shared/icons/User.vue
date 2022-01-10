<template>
  <img class="image" :src="avatarUrl" alt="user icon" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    avatarUrl: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
  border: solid 2px $blue;
  border-radius: 50%;
  object-fit: cover;
}
</style>
