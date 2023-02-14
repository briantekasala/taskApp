import { ILoginForm } from "../utils/FormService";
import { IFormService } from "./contracts/IFormService";

export class FormService implements IFormService {
  url: string;
  constructor(apiURl: string) {
    this.url = apiURl;
  }
  async userLogin(loginCredentials: ILoginForm): Promise<ILoginForm[]> {
    try {
      const checkUserLogin = await fetch(`${this.url}/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(loginCredentials),
      });

      if (!checkUserLogin.ok) {
        throw new Error(await checkUserLogin.text());
      }

      const userLoginResult: ILoginForm[] = await checkUserLogin.json();
      return userLoginResult;
    } catch (error) {
      throw new Error("error", { cause: error });
    }
  }
  async signUp(signUpCredentials: ILoginForm): Promise<boolean> {
    try {
      const createUser = await fetch(`${this.url}/signUp`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(signUpCredentials),
      });

      if (!createUser.ok) {
        throw new Error(await createUser.text());
      }
      return createUser.ok;
    } catch (error) {
      throw new Error("error", { cause: error });
    }
  }
}
