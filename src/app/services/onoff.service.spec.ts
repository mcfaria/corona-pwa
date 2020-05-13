import { TestBed } from '@angular/core/testing';

import { OnoffService } from './onoff.service';

describe('OnoffService', () => {
  let service: OnoffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnoffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
