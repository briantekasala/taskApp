import { ILoginForm } from "../../utils/FormService";

export interface IFormService {
  userLogin(loginCredentials:ILoginForm): Promise<ILoginForm[]>;
  signUp(signUpCredentials:ILoginForm): Promise<boolean>;
}
