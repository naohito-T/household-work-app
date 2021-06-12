# Introduction

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

## thema color

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


## storybookの設定

後ほど記載

# ディレクトリ構成 atomic designを採用

## 環境別設定


## 環境別設定

## firebase設定


## Jest設定
