import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service/login-service.service';
import { PersistenceService, StorageType} from 'angular-persistence';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adminisrators-list',
  templateUrl: './adminisrators-list.component.html',
  styleUrls: ['./adminisrators-list.component.css']
})
export class AdminisratorsListComponent implements OnInit {
  private agency_id;
  admins_list;
  url;

  constructor(
    private loginservice: LoginServiceService,
    private persistant_data: PersistenceService,
    private route: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getAdminsList();
    this.url = this.loginservice.userAccountBaseUrl();
  }

  getAdminsList () {
    const params = {
      role_name : 'administrator'
    };
    this.loginservice.getAdminsList(params).subscribe(data => {
        this.admins_list = data;
        console.log(this.admins_list);
      });
  }

  navToAdminDetails(admin) {
    this.persistant_data.set('admin', admin,
    {type: StorageType.SESSION});

    this.route.navigate([`${this.url}/admin/details`]);
  }

  onAddAdmin(added: boolean) {
      this.getAdminsList();
  }

}
