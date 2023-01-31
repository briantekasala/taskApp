import { IPersonAssignmentList } from "../../utils/personAssignmentList";

export interface IScheduleService {
  getScheduleService(): Promise<IPersonAssignmentList[]>;
}
