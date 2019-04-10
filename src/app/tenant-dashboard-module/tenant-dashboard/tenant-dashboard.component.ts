import { Component, OnInit } from '@angular/core';
import { TenantServerApiService } from '../tenant-api/tenant-server-api.service';

@Component({
  selector: 'app-tenant-dashboard',
  templateUrl: './tenant-dashboard.component.html',
  styleUrls: ['./tenant-dashboard.component.css']
})
export class TenantDashboardComponent implements OnInit {
  private tenant_details;
  private tenant_data;

  constructor(
    private serverApiService: TenantServerApiService,
  ) { }

  ngOnInit() {
    this.tenant_details = this.serverApiService.getTenantDetails();
    this.serverApiService.fetchTenantData(this.tenant_details['id']).subscribe(results => {
      console.log(results, this.tenant_details);
      this.tenant_data = results;
    });
  }

  Logout() {
    this.serverApiService.logout();
  }

}
