import { IPersonAssignmentList } from "../utils/personAssignmentList";
import { IScheduleService } from "./contracts/IScheduleService";

export class ScheduleService implements IScheduleService {
  url: string;
  constructor(apiURl: string) {
    this.url = apiURl;
  }
  async makeSchedule(data: any): Promise<void> {
    const createSchedule: IPersonAssignmentList = data as IPersonAssignmentList;

    try {
      const addUserInSchedule = await fetch(`${this.url}/makeSchedule`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(createSchedule),
      });

      if (!addUserInSchedule.ok) {
        throw new Error(await addUserInSchedule.text());
      }
    } catch (error) {
      throw new Error("error", { cause: error });
    }
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
    } catch (error) {
      throw new Error("error", { cause: error });
    }
  }
}
