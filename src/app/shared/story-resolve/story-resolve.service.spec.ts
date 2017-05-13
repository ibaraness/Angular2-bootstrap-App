import { TestBed, inject } from '@angular/core/testing';

import { StoryResolveService } from './story-resolve.service';

describe('StoryResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryResolveService]
    });
  });

  it('should be created', inject([StoryResolveService], (service: StoryResolveService) => {
    expect(service).toBeTruthy();
  }));
});
