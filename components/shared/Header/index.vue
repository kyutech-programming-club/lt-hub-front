<template>
  <FlexContainer>
    <nuxt-link to="/">LT-Hub</nuxt-link>
    <UserIcon :avatarUrl="avatarUrl" :size="{ sp: '32px', pc: '40px' }" />
    <Menu
      @goToMyPage="goToMyPage"
      @goToManagePage="goToManagePage"
      @logout="logout"
    />
  </FlexContainer>
</template>

<script lang="ts">
import { defineComponent, ref, useRouter } from "@nuxtjs/composition-api";
import FlexContainer from "~/components/layout/FlexContainer.vue";
import UserIcon from "~/components/shared/icons/User.vue";
import Menu from "~/components/shared/Header/Menu.vue";

export default defineComponent({
  components: {
    FlexContainer,
    UserIcon,
    Menu,
  },
  setup() {
    // 以下2つ本来はstoreで管理、出来次第変更
    const avaterUrl = ref<string>(
      "https://avatars.githubusercontent.com/u/50654077?v=4"
    );
    const userId = ref<string>("1");

    const router = useRouter();

    const goToMyPage = () => {
      router.push(`/users/${userId}`);
    };

    const goToManagePage = () => {
      router.push("/manage");
    };

    const logout = () => {
      // ログアウトの処理
    };

    return {
      avaterUrl,
      goToMyPage,
      goToManagePage,
      logout,
    };
  },
});
</script>
