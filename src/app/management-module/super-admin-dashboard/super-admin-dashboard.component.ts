import { Component, OnInit } from '@angular/core';
import { PropertyResourceService } from '../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { LoginServiceService } from '../services/login-service/login-service.service';
import { PersistenceService, StorageType} from 'angular-persistence';
import { error } from 'util';
import { Observable } from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
  tokenExists;
  user_details;
  avatar = 'http://127.0.0.1:8000';
  private appDataSub: any;
  userPermissionLevel: String;
  userBaseUrl;
  private notifications;

  constructor(
    private dbservice: PropertyResourceService,
    private route: Router,
    private router: ActivatedRoute,
    private loginservice: LoginServiceService,
    private persistance: PersistenceService
  ) { }

  company_data;

  ngOnInit() {
    this.userBaseUrl = this.loginservice.userAccountBaseUrl();

    this.tokenExists = this.loginservice.checkToken();

    if (!this.tokenExists) {
      this.route.navigate(['/admin/auth']);
    }
    this.company_data = this.persistance.get('company_data', StorageType.SESSION);
    this.user_details = this.persistance.get('user_data', StorageType.SESSION);

    this.userPermissionLevel = this.loginservice.getPermissionLevel();
    this.Notifications(this.user_details['id']);

  }

  Notifications(user_id)  {
    this.loginservice.getNotifications(user_id).subscribe(results => {
      // console.log(results);
      this.notifications = results;
      console.log(this.notifications.length);
    });
  }

  Logout() {
    this.loginservice.logout();
  }

}
