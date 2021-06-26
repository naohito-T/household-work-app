export interface TaskComplite {
  complete: '未実施' | '実施中' | '完了';
}

export interface Task {
  task_name: string;
  user: number;
  owner: number;
  contact: number;
  complete: TaskComplite;
  created: Date;
  updated: Date;
  image_url?: string; // 初期値がない場合はフリーアイコン
}
