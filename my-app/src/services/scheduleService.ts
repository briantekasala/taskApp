import { IPersonAssignmentList } from "../utils/personAssignmentList";
import { IScheduleService } from "./contracts/IScheduleService";

export class ScheduleService implements IScheduleService {
  url: string;
  constructor(apiURl: string) {
    this.url = apiURl;
  }
  async getScheduleService() {
    try {
      const user = await fetch(`${this.url}/schedule`, {
        method: "GET",
      });
      if (!user.ok) {
        throw new Error(await user.text());
      }

      const scheduleList: IPersonAssignmentList[] = await user.json();

      return scheduleList;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
