<template>
  <div class="box">
    <FlexContainer
      class="box__header"
      justifyContent="space-between"
      alignItems="center"
    >
      <h3 class="box__title">
        <slot name="title" />
      </h3>
      <span class="box__sub">
        <slot name="sub" />
      </span>
    </FlexContainer>
    <slot name="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import FlexContainer from "~/components/layout/FlexContainer.vue";

export default defineComponent({
  components: {
    FlexContainer,
  },
});
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  border-radius: 12px;
  background: $white;
  box-shadow: 0 3px 6px $shadow;

  &__header {
    height: 36px;
    padding: 0 16px;
    background: $blue;
    border-radius: 12px 12px 0 0;

    @include mq() {
      padding: 0 20px;
    }
  }

  &__title {
    font-size: 2rem;
    font-weight: 500;
    color: $white;
  }

  &__sub {
    font-size: 1.4rem;
    font-weight: 500;
    color: $white;
  }
}
</style>
