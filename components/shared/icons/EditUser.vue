<template>
  <FlexContainer class="icon" justifyContent="center" alignItems="center">
    <UserIcon class="icon__user" :avatarUrl="avatarUrl" />
    <div class="icon__wrapper" />
    <CameraIcon class="icon__camera" />
  </FlexContainer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import FlexContainer from "~/components/layout/FlexContainer.vue";
import UserIcon from "~/components/shared/icons/User.vue";
import CameraIcon from "~/components/shared/icons/Camera.vue";

export default defineComponent({
  components: {
    FlexContainer,
    UserIcon,
    CameraIcon,
  },
  props: {
    avatarUrl: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.icon {
  width: 80px;
  height: 80px;
  position: relative;

  @include mq() {
    width: 120px;
    height: 120px;
  }

  &__user {
    position: absolute;
  }

  &__wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    background: rgba($color: #000000, $alpha: 0.5);
  }

  &__camera {
    z-index: 1;

    @include mq() {
      transform: scale(1.5);
    }
  }
}
</style>
