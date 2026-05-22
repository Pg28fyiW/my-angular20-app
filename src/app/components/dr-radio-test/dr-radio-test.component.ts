import { Component } from '@angular/core';

@Component({
  selector: 'app-dr-radio-test',
  standalone: false,
  templateUrl: './dr-radio-test.component.html',
  styleUrl: './dr-radio-test.component.scss'
})
export class DrRadioTestComponent {

  radioButtonTypeList = [
    {
      value: 'radiobutton1',
      label: 'ラジオボタンテスト１'
    },
    {
      value: 'radiobutton2',
      label: 'ラジオボタンテスト２'
    }
  ];

  inputData = {
    radioButtonType: ''
  };

  updateInputData(): void {
    console.log('選択された値:', this.inputData.radioButtonType);
  }

  openQuestionModal(value: string): void {
    console.log('？クリック:', value);
  }
}