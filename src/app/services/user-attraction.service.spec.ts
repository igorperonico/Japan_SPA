import { TestBed } from '@angular/core/testing';

import { UserAttractionService } from './user-attraction.service';

describe('UserAttractionService', () => {
  let service: UserAttractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAttractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
