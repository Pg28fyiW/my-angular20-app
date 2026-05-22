import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrRadioTestComponent } from './dr-radio-test.component';

describe('DrRadioTestComponent', () => {
  let component: DrRadioTestComponent;
  let fixture: ComponentFixture<DrRadioTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrRadioTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrRadioTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
