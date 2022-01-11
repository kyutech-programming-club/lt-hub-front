<template>
  <div class="box">
    <FlexContainer class="box__header">
      <h3 class="box__title">
        <slot name="title" />
      </h3>
      <span class="box__sub">
        <slot name="sub" />
      </span>
    </FlexContainer>
    <slot name="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import FlexContainer from "~/components/layout/FlexContainer.vue";

export default defineComponent({
  components: {
    FlexContainer,
  },
});
</script>
