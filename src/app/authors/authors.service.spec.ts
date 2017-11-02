import { TestBed, inject } from '@angular/core/testing';

import { SuthorsService } from './suthors.service';

describe('SuthorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuthorsService]
    });
  });

  it('should be created', inject([SuthorsService], (service: SuthorsService) => {
    expect(service).toBeTruthy();
  }));
});
