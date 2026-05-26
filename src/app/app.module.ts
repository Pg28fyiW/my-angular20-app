import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';

import { UploadInputComponent } from './components/upload-input/upload-input.component';
import { RadioTestComponent } from './components/radio-test/radio-test.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    App,
    RadioTestComponent,
    UploadInputComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // ルーティングの設定をインポート
  ],
  providers: [],
  bootstrap: [
    App
  ]
})
export class AppModule { }