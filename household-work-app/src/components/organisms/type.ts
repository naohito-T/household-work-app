export interface TaskComplite {
  complete: '未実施' | '実施中' | '完了';
}

export interface Task {
  name: string;
  contact: number;
  complete: TaskComplite;
  created: Date;
  updated: Date;
  // 初期値がない場合はフリーアイコン
  image_url?: string;
}
