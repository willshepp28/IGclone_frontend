import { TestBed, inject } from '@angular/core/testing';

import { FollowerService } from './follower.service';

describe('FollowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FollowerService]
    });
  });

  it('should be created', inject([FollowerService], (service: FollowerService) => {
    expect(service).toBeTruthy();
  }));
});
