import { TestBed } from '@angular/core/testing';

import { CongressApiService } from './congress-api.service';

describe('CongressApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CongressApiService = TestBed.get(CongressApiService);
    expect(service).toBeTruthy();
  });
});
