import { Component, OnInit } from '@angular/core';
import { TenantServerApiService } from '../tenant-api/tenant-server-api.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tenant-dashboard',
  templateUrl: './tenant-dashboard.component.html',
  styleUrls: ['./tenant-dashboard.component.css']
})
export class TenantDashboardComponent implements OnInit {

  constructor(
    private serverApiService: TenantServerApiService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  Logout() {
    this.serverApiService.logout();
  }

  navToRepairs() {
    this.router.navigate(['/account/request-repairs']);
  }

}
