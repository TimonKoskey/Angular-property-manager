import { Component, OnInit } from '@angular/core';
import { PropertyResourceService } from '../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { LoginServiceService } from '../services/login-service/login-service.service';
import { PersistenceService, StorageType} from 'angular-persistence';
import { error } from 'util';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  tokenExists;
  private appDataSub;
  user_details;

  constructor(
    private dbservice: PropertyResourceService,
    private route: Router,
    private loginservice: LoginServiceService,
    private persistance: PersistenceService
  ) { }

  ngOnInit() {
    this.tokenExists = this.loginservice.checkToken();
    if (!this.tokenExists) {
      this.route.navigate(['/sign-in']);
    }
  }

  getUserDetails() {
    const user_id = this.loginservice.getUser_ID();
    this.appDataSub = this.loginservice.getAppData(user_id).subscribe((appdata) => {
      // this.user_details = appdata;
      this.persistance.set('user_details', appdata,
                                  {type: StorageType.SESSION});
      this.user_details = this.persistance.get('user_details', StorageType.SESSION);
      console.log(this.user_details);
    }, _error => {
      // this.loginservice.logout();
      console.log(error);
    });
  }

  Logout() {
    this.loginservice.logout();
  }

}
