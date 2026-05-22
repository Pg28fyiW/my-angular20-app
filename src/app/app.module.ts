import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { DrRadioTestComponent } from './components/dr-radio-test/dr-radio-test.component';

@NgModule({
  declarations: [
    App,
    DrRadioTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    App
  ]
})
export class AppModule { }