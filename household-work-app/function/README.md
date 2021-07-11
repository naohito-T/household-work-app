# seed start

node 10系で実施してください。
node 10系に切り替えたあと以下コマンドでfirebase-toolをインストールしてください

```bash
$npm install -g firebase-tools
```

cmd + shift + b で tsc watch(tsconfig.json)を起動
起動後、エラーが走らなけば OK

```bash
$node lib/commands/dbseed.js [ドキュメント名] seeds/[tsvファイル名]
```

## seed delete

```bash
projectIDを確認する。
$firebase projects:list
```

## example

```bash
$node lib/commands/dbseed.js publishers seeds/publishers.tsv
```

## node version 固定

## 注意

vscode で function ディレクトリを起点に開いてください。

## ドキュメント削除

「Firestore はコレクション＞ドキュメント＞コレクション＞ドキュメント＞…と親子階層を持てるよ うになってるんだけど、普通に親ドキュメントを削除しただけでは、その子コレクション（サブコレ クション）は残ってしまうのね。親子まとめて削除するためには -r,--recursive オプションを指定 してあげる。あと Firestore 内の全てのコレクションとドキュメントをまとめて削除したいときは --all-collections を指定。

## memo

環境整備にあたって、firebase の logger の index.d.ts を変更している
宣言が見つからないとのことで書き換えてる

```bash
File Path
node_modules/@firebase/database-types/node_modules/@firebase/app-types/index.d.ts
```

```js
import { LogCallback, LogLevelString, LogOptions } from '@firebase/logger';
// 以下に変更
import { Logger, LogLevel, LogHandler } from '@firebase/logger';

// Sets log level for all Firebase components.
  setLogLevel(logLevel: LogLevelString): void;
// 以下に変更
  setLogLevel(logLevel: LogLevel): void;

  onLog(logCallback: LogCallback, options?: LogOptions): void;
// 以下に変更
  onLog(logCallback: Logger, options?: LogHandler): void;

import { LogLevel } from './src/logger';
export declare function setLogLevel(level: LogLevel): void;
export { Logger, LogLevel, LogHandler } from './src/logger';


```

## firebase function deploy

deployは無料から従量課金制に変更しないとできない。
試す場合にはlocalで実行する。

```bash
production
$firebase deploy --only functions

local
$ GOOGLE_APPLICSTION_CREDENTIALS=./src/[firebase keyfile] firebase serve --only functions
```

## env 周りの話
[URL](https://gist.github.com/kenmori/ef48f09e9f1bfb30fe34cc11db0031d6)
