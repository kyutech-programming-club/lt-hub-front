<template>
  <div class="gridContainer" :style="styles">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
} from "@nuxtjs/composition-api";

type Device = {
  base: number;
  tablet: number;
  pc: number;
};

export default defineComponent({
  props: {
    cols: {
      type: Number as PropType<number> | Object as PropType<Device>,
      default: 1,
    },
    gap: {
      type: Number as PropType<number> | Object as PropType<Device>,
      default: 0,
    },
  },
  setup(props) {
    const baseCol = ref<number>();
    const tabletCol = ref<number>();
    const pcCol = ref<number>();

    const baseGap = ref<number>();
    const tabletGap = ref<number>();
    const pcGap = ref<number>();

    const styles = computed(() => {
      if (typeof props.cols === "number") {
        baseCol.value = props.cols;
        tabletCol.value = props.cols;
        pcCol.value = props.cols;
      } else {
        baseCol.value = props.cols.base;
        tabletCol.value = props.cols.tablet;
        pcCol.value = props.cols.pc;
      }

      if (typeof props.gap === "number") {
        baseGap.value = props.gap;
        tabletGap.value = props.gap;
        pcGap.value = props.gap;
      } else {
        baseGap.value = props.gap.base;
        tabletGap.value = props.gap.tablet;
        pcGap.value = props.gap.pc;
      }

      return {
        "--baseCol": `${baseCol.value}`,
        "--tabletCol": `${tabletCol.value}`,
        "--pcCol": `${pcCol.value}`,
        "--baseGap": `${baseGap.value}px`,
        "--tabletGap": `${tabletGap.value}px`,
        "--pcGap": `${pcGap.value}px`,
      };
    });

    return {
      styles,
    };
  },
});
</script>

<style lang="scss" scoped>
.gridContainer {
  display: grid;
  grid-template-columns: repeat(var(--baseCol), minmax(0, 1fr));
  place-items: center;
  gap: var(--baseGap);

  @include mq() {
    grid-template-columns: repeat(var(--tabletCol), minmax(0, 1fr));
    gap: var(--tabletGap);
  }

  @include mq(pc) {
    grid-template-columns: repeat(var(--pcCol), minmax(0, 1fr));
    gap: var(--pcGap);
  }
}
</style>
