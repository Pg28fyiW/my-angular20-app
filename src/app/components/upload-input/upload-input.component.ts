import { Component, OnInit } from '@angular/core';




import { Router } from '@angular/router';
import { IUploadInput } from '../../interface/view/upload-form';
import { UploadService } from '../../service/upload/upload.service';
import heic2any from 'heic2any';


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

  // 画面入力情報
  input: IUploadInput = {
    inContext: '',
    // uploadは書かなくてOK（? なので任意）
  };

  // クリックして拡大表示する画像
  selectedPreviewUrl: string | null = null;

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
  async inputFile1(event: Event): Promise<void> {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {

      this.jpegfile1 = null;
      this.previewUrl1 = null;
      this.updateInput();
      return;
    }

    let file = input.files[0];
    // HEIC形式のファイルをJPEG形式に変換
    if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
      file = await this.convertHeicToJpeg(file);
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
  async inputFile2(event: Event): Promise<void> {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {

      this.jpegfile2 = null;
      this.previewUrl2 = null;
      this.updateInput();
      return;
    }

    let file = input.files[0];
    // HEIC形式のファイルをJPEG形式に変換
    if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
      file = await this.convertHeicToJpeg(file);
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
  async inputFile3(event: Event): Promise<void> {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      this.jpegfile3 = null;
      this.previewUrl3 = null;
      this.updateInput();
      return;
    }

    let file = input.files[0];
    if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
      file = await this.convertHeicToJpeg(file);
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
   * プレビュー画像クリック時
   */
  openPreview(url: string | null): void {
    if (!url) {
      return;
    }

    this.selectedPreviewUrl = url;
  }

  /**
   * 拡大画像を閉じる
   */
  closePreview(): void {
    this.selectedPreviewUrl = null;
  }

  /**
   * HEIC形式のファイルをJPEG形式に変換する
   * @param file 
   * @returns 
   */
  private async convertHeicToJpeg(file: File): Promise<File> {
    const convertedBlob = await heic2any({
      blob: file,
      toType: 'image/jpeg',
      quality: 0.8
    }) as Blob;

    return new File(
      [convertedBlob],
      file.name.replace(/\.(heic|heif)$/i, '.jpg'),
      { type: 'image/jpeg' }
    );
  }


}
