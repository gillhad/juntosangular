import { TestBed } from '@angular/core/testing';

import { CountriesHelperService } from './countries-helper.service';

describe('CountriesHelperService', () => {
  let service: CountriesHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
