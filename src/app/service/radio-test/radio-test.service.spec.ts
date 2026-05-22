import { TestBed } from '@angular/core/testing';

import { RadioTestService } from './radio-test.service';

describe('RadioTestService', () => {
  let service: RadioTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
