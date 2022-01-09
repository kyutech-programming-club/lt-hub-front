import { NuxtRuntimeConfig } from "@nuxt/types/config/runtime";
import { AuthApi } from "~/api/authApi";

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $authApi: AuthApi;
  }

  interface Context {
    $authApi: AuthApi;
  }
}

/* eslint-disable */
declare module "vuex/types/index" {
  interface Store<S> {
    readonly $authApi: AuthApi;
    readonly $config: NuxtRuntimeConfig;
  }
}
/* eslint-disable */
