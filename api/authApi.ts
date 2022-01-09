import axios, { AxiosResponse } from "axios";
import { LoginUser } from "~/types";

export class AuthApi {
  private apiUrl: string;

  constructor(apiUrl: string) {
    if (!apiUrl) throw new Error("Runtime error: invalid argument");
    this.apiUrl = apiUrl;
  }

  async getLoginUser(token: string) {
    const response: AxiosResponse<LoginUser> = await axios.get(
      `${this.apiUrl}/login`,
      { headers: { token } }
    );

    return response.data;
  }
}
