/* DBの型モデルファイル */
/**
 * @memo idを省略している理由
 *       RDBではレコードの中にIDがあるが、Firestoreのドキュメントには
 *       IDはドキュメントの外にある。firestoreから取得したドキュメントデータは
 *       そのままだとIDの値を持たないため、必要に応じてあとから入れられるようにしている
 */

import firebase from 'firebase';
import 'firebase/firestore';

export interface Publisher {
  id?: string;
  name: string;
  nameReading: string | null;
  website: string | null;
  createdAt: firebase.firestore.Timestamp | null;
  updatedAt: firebase.firestore.Timestamp | null;
}
