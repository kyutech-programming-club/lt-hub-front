<template>
  <nav>
    <Button>マイページ</Button>
    <Button>イベント管理</Button>
    <Button>ログアウト</Button>
  </nav>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@nuxtjs/composition-api";
import Button from "~/components/shared/Header/Button.vue";

export default defineComponent({
  components: {
    Button,
  },
  setup(_, { emit }: SetupContext) {
    const goToMyPage = () => {
      emit("goToMyPage");
    };

    const goToManagePage = () => {
      emit("goToManagePage");
    };

    const logout = () => {
      emit("logout");
    };

    return {
      goToMyPage,
      goToManagePage,
      logout,
    };
  },
});
</script>
