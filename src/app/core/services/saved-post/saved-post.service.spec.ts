import { TestBed, inject } from '@angular/core/testing';

import { SavedPostService } from './saved-post.service';

describe('SavedPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedPostService]
    });
  });

  it('should be created', inject([SavedPostService], (service: SavedPostService) => {
    expect(service).toBeTruthy();
  }));
});
