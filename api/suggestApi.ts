import axios, { AxiosResponse } from "axios";
import { Suggest } from "~/types";

export class SuggestApi {
  private apiUrl: string;

  constructor(apiUrl: string) {
    if (!apiUrl) throw new Error("Runtime error: invalid argument");
    this.apiUrl = apiUrl;
  }

  async getSuggests(token: string) {
    const response: AxiosResponse<Suggest[]> = await axios.get(
      `${this.apiUrl}/suggests`,
      { header: { token } }
    );

    return response.data;
  }
}
