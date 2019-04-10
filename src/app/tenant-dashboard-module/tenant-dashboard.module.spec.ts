import { TenantDashboardModule } from './tenant-dashboard.module';

describe('TenantDashboardModule', () => {
  let tenantDashboardModule: TenantDashboardModule;

  beforeEach(() => {
    tenantDashboardModule = new TenantDashboardModule();
  });

  it('should create an instance', () => {
    expect(tenantDashboardModule).toBeTruthy();
  });
});
