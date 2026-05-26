import { Component, OnInit } from '@angular/core';




import { Router } from '@angular/router';
import { IUploadInput } from '../../interface/view/upload-form';
import { UploadService } from '../../service/upload/upload.service';


@Component({
  selector: 'app-upload-input',
  standalone: false,
  templateUrl: './upload-input.component.html',
  styleUrl: './upload-input.component.scss',
})
export class UploadInputComponent implements OnInit {
  // inContext
  inContext: string = '';
  // アップロードファイル１
  jpegfile1: File | null = null;
  // アップロードファイル２
  jpegfile2: File | null = null;
  // アップロードファイル３
  jpegfile3: File | null = null;

  // プレビュー表示１
  previewUrl1: string | null = null;
  // プレビュー表示２
  previewUrl2: string | null = null;
  // プレビュー表示３
  previewUrl3: string | null = null;

  // エラーメッセージ
  errMsgs: Array<string> = [];


  // アップロードファイルの必須チェックエラー
  public static readonly UPLOADFILE_REQUIRED = 'アップロードファイルを選択してください。';
  public static readonly INCONTEXT_REQUIRED = 'inContextを入力してください。';
  public static readonly INCONTEXT_LENGTH_OVER = 'inContextは3文字以内で入力してください';

  // 画面入力情報
  input: IUploadInput = {
    inContext: '',
    // uploadは書かなくてOK（? なので任意）
  };

  constructor(
    private router: Router,
    private uploadService: UploadService,
  ) { }

  ngOnInit(): void {

  }

  /**
   * 入力項目の更新
   * （入力したデータをサービスに渡して、保存している。）
   */
  updateInput(): void {
    this.uploadService.input = {
      inContext: this.inContext,
      upload1: this.jpegfile1 ?? undefined, // upload1: this.jpegfile1 だけだとエラーになるため
      upload2: this.jpegfile2 ?? undefined, // upload2: this.jpegfile2 だけだとエラーになるため
      upload3: this.jpegfile3 ?? undefined, // upload3: this.jpegfile3 だけだとエラーになるため
    };
  }

  /**
   * 「ファイル選択１」ボタン押下時 
   */
  inputFile1(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {

      this.jpegfile1 = null;
      this.previewUrl1 = null;
      this.updateInput();
      return;
    }

    const file = input.files[0];

    // サイズチェック
    if (!this.checkFileSize(file)) {
      this.jpegfile1 = null;
      this.previewUrl1 = null;
      this.updateInput();
      return;
    }

    // ファイル保存
    this.jpegfile1 = file;

    // プレビュー表示
    const reader = new FileReader();

    reader.onload = () => {
      this.previewUrl1 = reader.result as string;
    };

    reader.readAsDataURL(file);

    // サービスへ保存
    this.updateInput();
  }


  /**
   * 「ファイル選択２」ボタン押下時 
   */
  inputFile2(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {

      this.jpegfile2 = null;
      this.previewUrl2 = null;
      this.updateInput();
      return;
    }

    const file = input.files[0];

    // サイズチェック
    if (!this.checkFileSize(file)) {

      this.jpegfile2 = null;
      this.previewUrl2 = null;
      this.updateInput();
      return;
    }

    // ファイル保存
    this.jpegfile2 = file;

    // プレビュー表示
    const reader = new FileReader();

    reader.onload = () => {

      this.previewUrl2 = reader.result as string;
    };

    reader.readAsDataURL(file);

    // サービスへ保存
    this.updateInput();
  }

  /**
   * 「ファイル選択３」ボタン押下時 
   */
  inputFile3(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      this.jpegfile3 = null;
      this.previewUrl3 = null;
      this.updateInput();
      return;
    }

    const file = input.files[0];

    // サイズチェック
    if (!this.checkFileSize(file)) {
      this.jpegfile3 = null;
      this.previewUrl3 = null;
      this.updateInput();
      return;
    }

    // ファイル保存
    this.jpegfile3 = file;

    // プレビュー表示
    const reader = new FileReader();

    reader.onload = () => {

      this.previewUrl3 = reader.result as string;
    };

    reader.readAsDataURL(file);

    // サービスへ保存
    this.updateInput();
  }

  /**
   * jpgファイル
   * @param file jpg
   */
  private checkFileSize(file: File): boolean {
    const MAX_SIZE = 2 * 1024 * 1024;

    if (file.size > MAX_SIZE) {
      this.errMsgs = ['ファイルサイズは2MB以内にしてください。'];
      return false;
    }

    this.errMsgs = [];
    return true;
  }

  /**
   * エラーメッセージが存在するか
   */
  hasErrMsg(): boolean {
    return this.errMsgs && this.errMsgs.length > 0 ? true : false;
  }

  /**
   * 戻るボタン押下処理
   */
  back(): void {
    this.router.navigateByUrl('dr');
  }

  /**
   * 「次へ」ボタン押下（アップロード本登録画面へ遷移）
   */
  onNext(): void {

  }


}
