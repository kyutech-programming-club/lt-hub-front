<template>
  <button class="button" :style="styles">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@nuxtjs/composition-api";

type ButtonSizeProps = "sm" | "md" | "lg";
type ButtonTypeProps = "normal" | "moderate" | "danger";

export default defineComponent({
  props: {
    size: {
      type: String as PropType<ButtonSizeProps>,
      default: "sm",
    },
    type: {
      type: String as PropType<ButtonTypeProps>,
      default: "normal",
    },
  },
  setup(props) {
    const styles = computed(() => {
      let spWidth;
      let pcWidth;

      if (props.size === "sm") {
        spWidth = "68px";
        pcWidth = "88px";
      } else if (props.size === "md") {
        spWidth = "120px";
        pcWidth = "152px";
      } else if (props.size === "lg") {
        spWidth = "200px";
        pcWidth = "200px";
      }

      let borderColor;
      let borderHoverColor;
      let backgroundColor;
      let backgroundHoverColor;
      let fontColor;
      let fontHoverColor;

      if (props.type === "normal") {
        borderColor = "#4eb2d6";
        borderHoverColor = "#4eb2d6";
        backgroundColor = "#ffffff";
        backgroundHoverColor = "#4eb2d6";
        fontColor = "#4eb2d6";
        fontHoverColor = "#ffffff";
      } else if (props.type === "moderate") {
        borderColor = "#bdbdbd";
        borderHoverColor = "#e0e0e0";
        backgroundColor = "#fafafa";
        backgroundHoverColor = "#fafafa";
        fontColor = "#bdbdbd";
        fontHoverColor = "#e0e0e0";
      } else if (props.type === "danger") {
        borderColor = "#d93535";
        borderHoverColor = "#ec9999";
        backgroundColor = "#ffffff";
        backgroundHoverColor = "#ffffff";
        fontColor = "#d93535";
        fontHoverColor = "#ec9999";
      }

      return {
        "--spWidth": spWidth,
        "--pcWidth": pcWidth,
        "--borderColor": borderColor,
        "--borderHoverColor": borderHoverColor,
        "--backgroundColor": backgroundColor,
        "--backgroundHoverColor": backgroundHoverColor,
        "--fontColor": fontColor,
        "--fontHoverColor": fontHoverColor,
      };
    });

    return { styles };
  },
});
</script>

<style lang="scss" scoped>
.button {
  width: var(--spWidth);
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--borderColor);
  border-radius: 14px;
  background: var(--backgroundColor);
  color: var(--fontColor);
  font-size: 14px;
  font-weight: bold;
  line-height: 28px;
  transition: 0.3s;

  @include mq() {
    width: var(--pcWidth);
    height: 32px;
    border-radius: 16px;
    font-size: 16px;
    line-height: 32px;
  }

  &:hover {
    border: 2px solid var(--borderHoverColor);
    background: var(--backgroundHoverColor);
    color: var(--fontHoverColor);
  }
}
</style>
