import { TestBed } from '@angular/core/testing';

import { JobNewsService } from './job-news.service';

describe('JobNewsService', () => {
  let service: JobNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
