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
      { headers: { token } }
    );

    return response.data;
  }

  async createSuggest(token: string, suggest: string) {
    await axios.post(
      `${this.apiUrl}/suggests`,
      { theme: suggest },
      { headers: { token } }
    );
  }
}
