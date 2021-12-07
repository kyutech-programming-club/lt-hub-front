<template>
  <div class="flexContainer" :style="styles">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@nuxtjs/composition-api";

type JustifyContentProps =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type AlignItemsProps =
  | "normal"
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end";

type FlexWrapProps = "nowrap" | "wrap" | "wrap-reverse";

type FlexDirectionProps = "row" | "row-reverse" | "column" | "column-reverse";

export default defineComponent({
  props: {
    justifyContent: {
      type: String as PropType<JustifyContentProps>,
      default: "flex-start",
    },
    alignItems: {
      type: String as PropType<AlignItemsProps>,
      default: "normal",
    },
    flexWrap: {
      type: String as PropType<FlexWrapProps>,
      default: "nowrap",
    },
    flexDirection: {
      type: String as PropType<FlexDirectionProps>,
      default: "row",
    },
    gap: {
      type: Number as PropType<number>,
      default: 0,
    },
  },
  setup(props) {
    const styles = computed(() => {
      return {
        "--justifyContent": props.justifyContent,
        "--alignItems": props.alignItems,
        "--flexWrap": props.flexWrap,
        "--flexDirection": props.flexDirection,
        "--gap": `${props.gap}px`,
      };
    });

    return {
      styles,
    };
  },
});
</script>

<style lang="scss" scoped>
.flexContainer {
  display: flex;
  justify-content: var(--justifyContent);
  align-items: var(--alignItems);
  flex-wrap: var(--flexWrap);
  flex-direction: var(--flexDirection);
  gap: var(--gap);
}
</style>
