import { Dev } from '../types/response';

export interface IRequestAPI {
  /**
   * Task一覧の取り込み
   */
  fetchTasks(name: string, place: string): Promise<Dev.Tasks[]>;
}
