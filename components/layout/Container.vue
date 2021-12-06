<template>
  <div class="container" :styles="styles">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    isSider: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props) {
    const styles = computed(() => {
      if (props.isSider) {
        return { "--padding": "52px 60px" };
      } else {
        return { "--padding:": "52px 120px" };
      }
    });

    return {
      styles,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 16px;

  @include mq(pc) {
    padding: var(--padding);
  }
}
</style>
