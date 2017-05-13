import { TestBed, inject } from '@angular/core/testing';

import { StoryDataService } from './story-data.service';

describe('StoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryDataService]
    });
  });

  it('should be created', inject([StoryDataService], (service: StoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
