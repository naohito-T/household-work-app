// インスタンスはエポックタイムで時刻を保持して文字列や数値として取り出す時にロケールやタイムゾーンに合わせて変換させる

/**
 * @memo
 * アンチパターン以下
 * [https://qiita.com/labocho/items/5fbaa0491b67221419b4]
 *
 * @example
 * initial state
 * const date = new Date();
 *
 * 年
 * const year = date.getFullYear();
 *
 * 月 jsでは0から月が始まるため + 1をする
 * const month = date.getFullMonth() + 1;
 *
 * 日 getDay()は非推奨
 * const day = data.getDay();
 *
 * date.getDay(); // 4 (木曜日)
 * date.getDate(); // 6 (6日)
 *
 * 曜日 日曜が0 土曜日が6 配列を使い曜日に変換する
 * dateT = ['日','月','火','水','木','金','土']
 * const date = dateT[date.getDay()];
 *
 * 時
 * const hours = date.getHours();
 *
 * 分
 * const minutes = date.getMinutes();
 *
 * 秒
 * const seconds = date.egtSeconds();
 *
 *
 *
 *
 */

/* 一週間分のdayを出す */

interface DateProps {
  year: number;
  month: number;
  day: number;
  wd: readonly ['日', '月', '火', '水', '木', '金', '土'];
}

const wd = ['日', '月', '火', '水', '木', '金', '土'] as const;

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

/**
 * @desc 今日の年月日と曜日を格納しているオブジェクト
 * @type Object
 */
export const WeekDay: DateProps = {
  year,
  month,
  day,
  wd,
} as const;
