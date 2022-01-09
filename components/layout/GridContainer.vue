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
  sp: number;
  tablet: number;
  pc: number;
};

export default defineComponent({
  props: {
    cols: {
      type: [Number, Object] as PropType<number | Device>,
      default: 1,
    },
    gap: {
      type: [Number, Object] as PropType<number | Device>,
      default: 0,
    },
  },
  setup(props) {
    const spCol = ref<number>();
    const tabletCol = ref<number>();
    const pcCol = ref<number>();

    const spGap = ref<number>();
    const tabletGap = ref<number>();
    const pcGap = ref<number>();

    const styles = computed(() => {
      if (typeof props.cols === "number") {
        spCol.value = props.cols;
        tabletCol.value = props.cols;
        pcCol.value = props.cols;
      } else {
        spCol.value = props.cols.sp;
        tabletCol.value = props.cols.tablet;
        pcCol.value = props.cols.pc;
      }

      if (typeof props.gap === "number") {
        spGap.value = props.gap;
        tabletGap.value = props.gap;
        pcGap.value = props.gap;
      } else {
        spGap.value = props.gap.sp;
        tabletGap.value = props.gap.tablet;
        pcGap.value = props.gap.pc;
      }

      return {
        "--baseCol": `${spCol.value}`,
        "--tabletCol": `${tabletCol.value}`,
        "--pcCol": `${pcCol.value}`,
        "--baseGap": `${spGap.value}px`,
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
  grid-template-columns: repeat(var(--spCol), minmax(0, 1fr));
  place-items: center;
  gap: var(--spGap);

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
