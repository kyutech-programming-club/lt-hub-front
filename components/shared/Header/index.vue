<template>
  <FlexContainer
    justifyContent="space-between"
    alignItems="center"
    class="header"
  >
    <nuxt-link to="/" class="header__title">LT-Hub</nuxt-link>
    <div class="header__user" @click="changeState">
      <UserIcon :avatarUrl="avatarUrl" />
    </div>
    <Menu
      v-show="isOpen"
      class="header__menu"
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
    const avatarUrl = ref<string>(
      "https://avatars.githubusercontent.com/u/50654077?v=4"
    );
    const userId = ref<string>("1");

    const isOpen = ref<boolean>(false);
    const changeState = () => {
      isOpen.value = !isOpen.value;
    };

    const router = useRouter();

    const goToMyPage = () => {
      router.push(`/users/${userId.value}`);
    };

    const goToManagePage = () => {
      router.push("/manage");
    };

    const logout = () => {
      // ログアウトの処理
    };

    return {
      avatarUrl,
      isOpen,
      changeState,
      goToMyPage,
      goToManagePage,
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 44px;
  padding: 0 16px;
  position: sticky;
  background: $blue-darken;

  @include mq() {
    height: 52px;
    padding: 0 20px;
  }

  &__title {
    color: $white;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1;
    text-decoration: none;

    @include mq() {
      font-size: 2.8rem;
    }
  }

  &__user {
    width: 32px;
    height: 32px;

    @include mq() {
      width: 40px;
      height: 40px;
    }
  }

  &__menu {
    position: absolute;
    top: 44px;
    right: 16px;

    @include mq() {
      top: 52px;
      right: 20px;
    }
  }
}
</style>
