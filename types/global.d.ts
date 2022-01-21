import { AuthApi } from "~/api/authApi";
import { SuggestApi } from "~/api/SuggestApi";

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $authApi: AuthApi;
    $suggestApi: SuggestApi;
  }

  interface Context {
    $authApi: AuthApi;
    $suggestApi: SuggestApi;
  }
}
