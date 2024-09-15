import { TestBed } from '@angular/core/testing';

import { TouristAttractionService } from './tourist-attraction.service';

describe('TouristAttractionService', () => {
  let service: TouristAttractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristAttractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
