<template>
  <img class="image" :style="styles" :src="avatarUrl" alt="user icon" />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
} from "@nuxtjs/composition-api";

type Device = {
  sp: string;
  tablet?: string;
  pc: string;
};

export default defineComponent({
  props: {
    width: {
      type: [String, Object] as PropType<string | Device>,
      default: "100%",
    },
    height: {
      type: [String, Object] as PropType<string | Device>,
      default: "100%",
    },
    avatarUrl: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const spWidth = ref<string>();
    const tabletWidth = ref<string>();
    const pcWidth = ref<string>();

    const spHeight = ref<string>();
    const tabletHeight = ref<string>();
    const pcHeight = ref<string>();

    const styles = computed(() => {
      if (typeof props.width === "string") {
        spWidth.value = props.width;
        tabletWidth.value = props.width;
        pcWidth.value = props.width;
      } else {
        spWidth.value = props.width.sp;
        pcWidth.value = props.width.pc;

        if (props.width.tablet === undefined) {
          tabletWidth.value = props.width.pc;
        } else {
          tabletWidth.value = props.width.tablet;
        }
      }

      if (typeof props.height === "string") {
        spHeight.value = props.height;
        tabletHeight.value = props.height;
        pcHeight.value = props.height;
      } else {
        spHeight.value = props.height.sp;
        tabletHeight.value = props.height.tablet;
        pcHeight.value = props.height.pc;

        if (props.height.tablet === undefined) {
          tabletHeight.value = props.height.pc;
        } else {
          tabletHeight.value = props.height.tablet;
        }
      }

      return {
        "--spWidth": `${spWidth.value}`,
        "--tabletWidth": `${tabletWidth.value}`,
        "--pcWidth": `${pcWidth.value}`,
        "--spHeight": `${spHeight.value}`,
        "--tabletHeight": `${tabletWidth.value}`,
        "--pcHeight": `${pcHeight.value}`,
      };
    });

    return { styles };
  },
});
</script>

<style lang="scss" scoped>
.image {
  width: var(--spWidth);
  height: var(--spHeight);
  border: solid 2px $blue;
  border-radius: 50%;
  object-fit: cover;

  @include mq() {
    width: var(--tabletWidth);
    height: var(--tabletHeight);
  }

  @include mq(pc) {
    width: var(--pcWidth);
    height: var(--pcHeight);
  }
}
</style>
