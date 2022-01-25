<template>
  <div class="label" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@nuxtjs/composition-api";

type LabelSizeProps = "sm" | "md";

export default defineComponent({
  props: {
    size: {
      type: String as PropType<LabelSizeProps>,
      default: "sm",
    },
  },
  setup(props) {
    const style = computed(() => {
      if (props.size === "sm") {
        return {
          "--spWidth": "60px",
          "--pcWidth": "72px",
        };
      } else if (props.size === "md") {
        return {
          "--spWidth": "88px",
          "--pcWidth": "96px",
        };
      }
    });

    return {
      style,
    };
  },
});
</script>

<style lang="scss" scoped>
.label {
  width: var(--spWidth);
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: $blue;
  color: $white;
  font-size: 1.4rem;
  font-weight: bold;

  @include mq() {
    width: var(--pcWidth);
    height: 32px;
    border-radius: 16px;
    font-size: 1.6rem;
  }
}
</style>
