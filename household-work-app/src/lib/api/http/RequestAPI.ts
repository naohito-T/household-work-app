import firebase from 'firebase';
import 'firebase/firestore';
import { IRequestAPI } from './IRequestAPI';
import { Task } from '../types/response/response';

export class RequestAPI implements IRequestAPI {
  private axios: any;
  public constructor(axios: any) {
    this.axios = axios;
  }
  /**
   * @desc    task一覧の読み込み
   * @returns tasks[]
   */
  public fetchTasks = async (): Promise<Task[]> => {
    const snapshot = await firebase.firestore().collection('tasks').get();
    const tasks = snapshot.docs.map((doc) => doc.data() as Task);
    return tasks;
  };
}
