<template>
  <div class="icon" :class="{ passed: isPassed }">
    <span class="icon__date">
      <slot name="date" />
    </span>
    <span class="icon__week">
      <slot name="week" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    isPassed: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.icon {
  width: 60px;
  height: 60px;
  color: $white;
  background: $blue;
  border: 1px solid $blue-lighten;
  border-radius: 999px;
  text-align: center;
  line-height: 1;
  font-family: $noto-sans;

  @include mq(pc) {
    width: 80px;
    height: 80px;
    line-height: 1.2;
  }

  &__date {
    display: block;
    padding-top: 14px;
    font-size: 20px;
    font-weight: 400;

    @include mq(pc) {
      padding-top: 18px;
      font-size: 24px;
    }
  }
  &__week {
    font-size: 12px;
    font-weight: 400;

    @include mq(pc) {
      font-size: 16px;
    }
  }
}

.passed {
  background: $black_lighten_1;
  border: $black_lighten_2;
}
</style>
