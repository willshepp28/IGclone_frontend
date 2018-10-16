import { TestBed, inject } from '@angular/core/testing';

import { DecodeTokenService } from './decode-token.service';

describe('DecodeTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecodeTokenService]
    });
  });

  it('should be created', inject([DecodeTokenService], (service: DecodeTokenService) => {
    expect(service).toBeTruthy();
  }));
});
