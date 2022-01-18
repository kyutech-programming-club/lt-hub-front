<template>
  <Overlay @close="close">
    <div class="modal" @click="stopEvent">
      <CloseIcon class="modal__close" @close="close" />
      <slot />
    </div>
  </Overlay>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Overlay from "~/components/shared/Overlay.vue";
import CloseIcon from "~/components/shared/icons/Close.vue";
import { useCreateTalkModalStore } from "~/store/createTalkModal";
import { useEditTalkModalStore } from "~/store/editTalkModal";

export default defineComponent({
  components: {
    Overlay,
    CloseIcon,
  },
  setup() {
    const createTalkModalStore = useCreateTalkModalStore();
    const editTalkModalStore = useEditTalkModalStore();

    const close = () => {
      createTalkModalStore.changeState(false);
      editTalkModalStore.changeState(false);
    };

    const stopEvent = (event: Event) => {
      event.stopPropagation();
    };

    return { close, stopEvent };
  },
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
