<template>
  <Overlay>
    <div class="modal">
      <CloseIcon class="modal__close" />
      <slot />
    </div>
  </Overlay>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Overlay from "~/components/shared/Overlay.vue";
import CloseIcon from "~/components/shared/icons/Close.vue";

export default defineComponent({
  components: {
    Overlay,
    CloseIcon,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  padding: 32px 16px;
  position: relative;
  background: $white;

  &__close {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
