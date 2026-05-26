import { Routes } from '@angular/router';
import { UploadInputComponent } from './components/upload-input/upload-input.component';
import { RadioTestComponent } from './components/radio-test/radio-test.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',   // トップ画面 ルートパス（http://localhost:4200/）にアクセスしたときのコンポーネント
        component: HomeComponent
    },
    {
        path: 'radio/test', // ラジオボタンのテストページ
        component: RadioTestComponent
    },
    {
        path: 'upload/input', // アップロードのテストページ
        component: UploadInputComponent,
    },
];