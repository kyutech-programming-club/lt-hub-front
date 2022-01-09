import { Context } from "@nuxt/types";
import { AuthApi } from "~/api/authApi";

export default function (
  context: Context,
  inject: (arg0: string, arg1: AuthApi) => void
) {
  const authApi = new AuthApi(context.$config.apiUrl);
  inject("authApi", authApi);
}
