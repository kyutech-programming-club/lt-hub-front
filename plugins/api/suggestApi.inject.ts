import { Context } from "@nuxt/types";
import { SuggestApi } from "~/api/suggestApi";

export default function (
  context: Context,
  inject: (arg0: string, arg1: SuggestApi) => void
) {
  const suggestApi = new SuggestApi(context.$config.apiUrl);
  inject("suggestApi", suggestApi);
}
