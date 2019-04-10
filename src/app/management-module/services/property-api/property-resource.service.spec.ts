import { TestBed, inject } from '@angular/core/testing';

import { PropertyResourceService } from './property-resource.service';

describe('PropertyResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyResourceService]
    });
  });

  it('should be created', inject([PropertyResourceService], (service: PropertyResourceService) => {
    expect(service).toBeTruthy();
  }));
});
