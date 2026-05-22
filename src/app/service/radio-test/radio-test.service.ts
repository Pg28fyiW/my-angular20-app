import { Injectable } from '@angular/core';

export interface ISelectItem {
  label: string;
  value: string;
  selected: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RadioTestService {

  /** ラジオボタンの選択肢 */
  private readonly _radioButtonTypeList: ISelectItem[] = [
    { value: 'radiobutton1', label: 'ラジオボタンテスト１', selected: false },
    { value: 'radiobutton2', label: 'ラジオボタンテスト２', selected: false }
  ];

  constructor() { }

  /** ラジオボタンの選択肢を返す */
  get radioButtonTypeList(): ISelectItem[] {
    return this._radioButtonTypeList;
  }
}