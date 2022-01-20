<template>
  <nuxt-link :to="path" class="button">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    path: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding-left: 24px;
  background: $white;
  color: $black-lighten-1;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: $blue-lighten;
    color: $white;
  }
}
</style>
