import { IPersonAssignmentList } from "../../utils/personAssignmentList";

export interface IScheduleService {
  getScheduleService(): Promise<IPersonAssignmentList[]>;
  makeSchedule(data: any): Promise<void>;
}
