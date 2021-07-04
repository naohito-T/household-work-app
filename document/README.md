# Introduction

## memo
READMEにreact-native-linkと書かれているのはJavaやObject-Cで書かれたライブラリを利用できないExpoでは使用できない。


react-native firebaseへのデプロイ方法
[URL](https://rennnosukesann.hatenablog.com/entry/2018/05/29/235733)


React TypeScript型定義基本
[URL](https://zenn.dev/ogakuzuko/articles/react-typescript-for-beginner)

ReactNative ライブラリ選定について
[URL](https://qiita.com/kaba/items/569aafd80889bb5d9328)

Firebase DB設計について
[URL](https://qiita.com/samuraikun/items/dfe7d1081f62359b0dcd)

## thema

二人で一つのアプリ
家事分担も二人でやろう

## app subthema

家事でより深くなれる

## app name

household work

## 技術選定

ReactNative
TypeScript
Expo

## product version

```bash
$ node -v
v14.4.0
$ expo --version
4.0.1
```

## Expo init

```bash
$ expo init household-work-app
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   There is a new version of expo-cli available (4.5.2).                 │
│   You are currently using expo-cli 4.0.1                                │
│   Install expo-cli globally using the package manager of your choice;   │
│   for example: `npm install -g expo-cli` to get the latest version      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
? Choose a template: › - Use arrow-keys. Return to submit.
    ----- Managed workflow -----
    blank                 a minimal app as clean as an empty canvas
❯   blank (TypeScript)    same as blank but with TypeScript configuration
    tabs (TypeScript)     several example screens and tabs using react-navigation and TypeScript
    ----- Bare workflow -----
    minimal               bare and minimal, just the essentials to get you started
    minimal (TypeScript)  same as minimal but with TypeScript configuration
```

## Use font

[URL](https://fontmeme.com/ja/font-blackpink/)


## expo custom font

カスタムファントはexpoが提供しているとのこと。
```bash
$expo install expo-font

・installed
$expo install @expo-google-fonts/noto-sans-jp
```

[URL](https://qiita.com/Abbiscuit/items/875295ce021ea41e3243)

## thema color

white modeと dark modeぐらいには変更できるようにしようか
### #use

dfbedd

### hsl

hsl(304, 34%, 81%)

### rgb

rgb(223, 190, 221)

## design カンプ

## eslint choice

[url](https://zenn.dev/rikutoyamaguchi/articles/react-native-setup)

$ npx eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · prompt
✔ What format do you want your config file to be in? · JavaScript
✔ What style of indentation do you use? · 4
✔ What quotes do you use for strings? · single
✔ What line endings do you use? · unix
✔ Do you require semicolons? · No / Yes
The config that you've selected requires the following dependencies:

react-hookプラグイン追加
このままだと、フックのルールが適用されないようなので、プラグインを追加。

$ yarn add -D eslint-plugin-react-hooks

$ yarn add -D prettier eslint-plugin-prettier

## husky lint-staged setup
lint-stagedとhuskyを使い、git commitのタイミングでeslintによるチェックを実施し、エラーだったらコミットさせない設定をする。
husky@4 versio4でないと動かないためhusky ver4を導入

```bash
$yarn add -D husky@4 lint-staged
```

## package.json format setup
・package.jsonをフォーマットしてくれる。

```bash
$yarn add -D sort-package-json

format
$yarn format:package or $npm run format:package
```


## storybookの設定

後ほど記載

## ディレクトリ構成 atomic designを採用
(参考URL)[https://note.com/tabelog_frontend/n/n4b8bcb44294c]

一般的な責務一覧

**Pages**
・ページのデータをTemplates層に流し込む

**Templates**
・ページ全体のレイアウトを決める
・Pagesの最上位
・同一ページ内で1度しか使えない

**Organisms**
・サービスとして意味のある単位の塊
・他のAtoms/Molecules/Organismsや純粋なHTMLで構成される
・独立して成立するコンテンツを提供する

**Molecules**
・一つ以上のAtomsに依存したcomponent
・ユーティリティ的な塊

## 環境別設定

expo startで何を読み込んでいるのか。。？
expo startをできないようにする。
makeファイルで指定した環境コマンドを実行させ、その設定ファイルを読み込ませる方針


## firebase設定


## Jest設定

## Android stadio 設定

[url](https://qiita.com/krile136/items/47b2e2cf2a7e586b6da3)

## entry point change

[url](https://qiita.com/shinbey221/items/5b5d0040fe5c76c53ca8)

## ui 設定

react-native-elements
UI Kitten
上記があるが今回はreact-native-elementsを採用

```bash
$yarn add react-native-elements
```

・react-native-elementsで構築
## login画面

始める、

## Home画面


## Routing

```bash
$yarn add @react-navigation/native
yarn add v1.22.10
```

expoのため以下も実行
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

stack navigaton

```bash
$yarn add @react-navigation/stack
```

bottom-tabs

```bash
$yarn add @react-navigation/bottom-tabs
```

## expo エントリーポイント変更
[参考URL](https://zenn.dev/takanori_is/articles/organize-expo-project-structure)


## debugger 設定

[参考URL](https://qiita.com/stranger1989/items/536d8adff88fcafa3ba1)
