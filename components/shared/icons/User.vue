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
    size: {
      type: [String, Object] as PropType<string | Device>,
      default: "100%",
    },
    avatarUrl: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const spSize = ref<string>();
    const tabletSize = ref<string>();
    const pcSize = ref<string>();

    const styles = computed(() => {
      if (typeof props.size === "string") {
        spSize.value = props.size;
        tabletSize.value = props.size;
        pcSize.value = props.size;
      } else {
        spSize.value = props.size.sp;
        pcSize.value = props.size.pc;

        if (props.size.tablet === undefined) {
          tabletSize.value = props.size.pc;
        } else {
          tabletSize.value = props.size.tablet;
        }
      }

      return {
        "--spSize": `${spSize.value}`,
        "--tabletSize": `${tabletSize.value}`,
        "--pcSize": `${pcSize.value}`,
      };
    });

    return { styles };
  },
});
</script>

<style lang="scss" scoped>
.image {
  width: var(--spSize);
  height: var(--spSize);
  border: solid 2px $blue;
  border-radius: 50%;
  object-fit: cover;

  @include mq() {
    width: var(--tabletSize);
    height: var(--tabletSize);
  }

  @include mq(pc) {
    width: var(--pcSize);
    height: var(--pcSize);
  }
}
</style>
