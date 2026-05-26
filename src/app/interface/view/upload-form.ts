/**
 * 機器制御DR（アップロード）の申込情報（Form）
 */
export interface IUploadForm {
    // /**
    //  * 処理内容
    //  * 00：登録
    //  * 01：更新（削除からの再登録も含む）
    //  * 09：削除
    //  */
    // operation: '00' | '01' | '09';
    // // バージョン
    // version: string;
    // // 契約情報
    // contract: IUploadContract;
    // 画面入力情報
    input: IUploadInput;
}

/**
 * 契約情報（Form）
 */
// export interface IUploadContract {
//     // 特定特定番号
//     contractNum: string;
//     // BPID
//     bpid: string;
//     // 供給地点特定番号
//     servicePointSpecNum: string;
//     // 料金カテゴリ
//     rateCategory: string;
//     // 住所
//     address: string;
//     // 読込オフセット
//     readOffset: string;
// }

/**
 * 機器制御DR（アップロード）入力画面の`アップロード`の入力項目（Form）
 */
export interface IUploadInput {
    // inContext
    inContext: string;
    // アップロード１
    upload1?: File;
    // アップロード２
    upload2?: File;
    // アップロード３
    upload3?: File;
}