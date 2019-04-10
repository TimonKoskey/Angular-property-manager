import { TestBed, inject } from '@angular/core/testing';

import { TenantServerApiService } from './tenant-server-api.service';

describe('TenantServerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenantServerApiService]
    });
  });

  it('should be created', inject([TenantServerApiService], (service: TenantServerApiService) => {
    expect(service).toBeTruthy();
  }));
});
