import { TestBed } from '@angular/core/testing';

import { LinesApiService } from './lines-api.service';

describe('LinesApiService', () => {
  let service: LinesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
