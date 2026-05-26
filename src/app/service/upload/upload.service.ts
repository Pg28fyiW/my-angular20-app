import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';

import { catchError, of, throwError } from 'rxjs'; // ← ★追加
import { IUploadForm, IUploadInput } from '../../interface/view/upload-form';

/**
 * 【検証用】アップロードのサービス
 */
@Injectable({
  providedIn: 'root',
})
export class UploadService {

  // 機器制御DR（アップロード）の申込情報
  // private _form: IUploadForm;

  // 重要（Service初期化）UploadServiceに 初期値を必ず作ります。
  private _form: IUploadForm = {
    // operation: '00',
    // version: '1',
    // contract: {
    //   contractNum: '',
    //   bpid: '',
    //   servicePointSpecNum: '',
    //   rateCategory: '',
    //   address: '',
    //   readOffset: ''
    // },
    input: {
      inContext: '',
      upload1: undefined,
      upload2: undefined,
      upload3: undefined,
    }
  };

  constructor(

  ) {}

  /**
   * 機器制御DR（【検証用】アップロード）申込情報（TODO: 【重要】申込情報、契約情報、画面入力情報のすべて）
   * 【重要】IDrBattryFormの型を返す
   * 
   * （【重要】getterは、必ず get の後にスペースを入れて「get + 半角スペース ＋ プロパティ名」という形で書きます。
   * プロパティ名 にアクセスするだけで、値を簡単に取得できるようになります。）
   */
  get form(): IUploadForm { return this._form; }
  set form(form: IUploadForm) { this._form = form; }

  /**
   * 機器制御DR（【検証用】アップロード）入力画面情報（TODO: 【重要】画面入力情報のみ）
   * 【重要】IDrBatteryInputの型を返す
   */
  get input(): IUploadInput { return this._form?.input; }
  set input(input: IUploadInput) { this._form.input = input; }



  
}

