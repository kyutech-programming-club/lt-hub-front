import axios, { AxiosResponse } from "axios";
import { CurrentUser } from "~/types";

export class AuthApi {
  private apiUrl: string;

  constructor(apiUrl: string) {
    if (!apiUrl) throw new Error("Runtime error: invalid argument");
    this.apiUrl = apiUrl;
  }

  async getCurrentUser(token: string) {
    const response: AxiosResponse<CurrentUser> = await axios.get(
      `${this.apiUrl}/login`,
      { headers: { token } }
    );

    return response.data;
  }
}
