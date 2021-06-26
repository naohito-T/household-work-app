import React, { createContext, useContext, useState } from 'react';

// interface Store {
//   user?: API.IRequestUserAPI;
//   admin?: API.IRequestAdminAPI;
// }

export const APIContext = createContext({});
interface Test {
  name: string;
  age: string;
}

// context作成
export const TestContext = createContext<Test>({ name: '', age: '' });

export const APIProvider: React.FC = (props) => {
  const [user, setUser] = useState<Test>({
    name: 'セイラ',
    age: '17',
  });
  // contextを渡す valueの値。これで親コンポーネントでの設定は完了
  // 後にadminや何で分ける
  return <TestContext.Provider value={user}></TestContext.Provider>;
};
