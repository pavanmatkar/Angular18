import { TestBed } from '@angular/core/testing';

import { Toast1Service } from './toast1.service';

describe('Toast1Service', () => {
  let service: Toast1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Toast1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
