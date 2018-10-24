import { TestBed, inject } from '@angular/core/testing';

import { HashstagsService } from './hashstags.service';

describe('HashstagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HashstagsService]
    });
  });

  it('should be created', inject([HashstagsService], (service: HashstagsService) => {
    expect(service).toBeTruthy();
  }));
});
