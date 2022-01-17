<template>
  <div class="overlay" @click="close">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup(_, { emit }: SetupContext) {
    emit("clsoe");
  },
});
</script>

<style lang="scss" scoped>
.overlay {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 44px 16px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba($color: #000, $alpha: 0.5);
  z-index: 100px;
}
</style>
