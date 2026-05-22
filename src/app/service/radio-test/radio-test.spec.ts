import { TestBed } from '@angular/core/testing';

import { RadioTest } from './radio-test';

describe('RadioTest', () => {
  let service: RadioTest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioTest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
