import { Component, OnInit } from '@angular/core';
import { TenantServerApiService } from '../tenant-api/tenant-server-api.service';

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.css']
})
export class HomeDisplayComponent implements OnInit {
  private tenant_details;
  private tenant_data;

  constructor(
    private serverApiService: TenantServerApiService,
  ) { }

  ngOnInit() {
    this.tenant_details = this.serverApiService.getTenantDetails();
    this.serverApiService.fetchTenantData(this.tenant_details['id']).subscribe(results => {
      this.tenant_data = results;
    });
  }

}
