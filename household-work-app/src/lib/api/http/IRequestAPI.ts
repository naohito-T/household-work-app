import { Dev } from '../types/response';

export interface IRequestAPI {
  /**
   * Task一覧の取り込み
   * 担当のidでrequestする
   */
  fetchTasks(taskId: number): Promise<Dev.Task[]>;
}
