<template>
  <button class="button" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup(_, { emit }: SetupContext) {
    const onClick = () => {
      emit("onClick");
    };

    return { onClick };
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
  transition: 0.3s;

  &:hover {
    background: $blue-lighten;
    color: $white;
  }
}
</style>
