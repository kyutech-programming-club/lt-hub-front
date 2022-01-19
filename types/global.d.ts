import { AuthApi } from "~/api/authApi";

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $authApi: AuthApi;
  }

  interface Context {
    $authApi: AuthApi;
  }
}
