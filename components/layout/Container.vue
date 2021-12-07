<template>
  <div class="container" :style="styles">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    isSidebar: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props) {
    const styles = computed(() => {
      if (props.isSidebar) {
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
  padding: 44px 16px;

  @include mq(pc) {
    padding: var(--padding);
  }
}
</style>
