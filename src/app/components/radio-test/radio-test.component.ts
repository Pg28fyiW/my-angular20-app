import { Component } from '@angular/core';
import { ISelectItem, RadioTestService } from '../../service/radio-test/radio-test.service';
import { RadioTypeConstant } from '../../constant/radio-type.constant';


@Component({
  selector: 'app-radio-test',
  standalone: false,
  templateUrl: './radio-test.component.html',
  styleUrl: './radio-test.component.scss'
})
export class RadioTestComponent {

  // ラジオボタンのリスト
  radioButtonTypeList: ISelectItem[] = this.radioTestService.radioButtonTypeList;

  // ラジオボタンの種類の定数
  readonly RadioTypeConst = RadioTypeConstant;

  constructor(
    private radioTestService: RadioTestService,
  ) { }

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