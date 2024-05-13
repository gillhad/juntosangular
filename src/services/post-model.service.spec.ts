import { TestBed } from '@angular/core/testing';

import { PostModelService } from './post-model.service';

describe('PostModelService', () => {
  let service: PostModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
