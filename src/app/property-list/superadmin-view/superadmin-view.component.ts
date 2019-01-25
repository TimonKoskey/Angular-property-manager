import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginServiceService } from '../../services/login-service/login-service.service';
import { PropertyResourceService } from '../../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { PersistenceService, StorageType} from 'angular-persistence';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-superadmin-view',
  templateUrl: './superadmin-view.component.html',
  styleUrls: ['./superadmin-view.component.css']
})
export class SuperadminViewComponent implements OnInit {
  private user_details;
  private property_list;

  constructor(
    private dbservice: PropertyResourceService,
    private loginservice: LoginServiceService,
    private router: Router,
    private persistenceservice: PersistenceService,
  ) {}

  ngOnInit() {
    this.user_details = this.persistenceservice.get('user_data', StorageType.SESSION);
    this.fetchProperties ();
  }

  fetchProperties () {
    console.log(this.user_details['role']['role_name']);
    if ( this.user_details['role']['role_name'] === 'Super-Administrator' && this.loginservice.checkToken()) {

      this.dbservice.fetchAllProperties().subscribe(results => {
        this.property_list = results;
      });
    }
  }

  navigateToDetails(properyID) {
    this.persistenceservice.set('property_id', properyID,
    {type: StorageType.SESSION});
    this.router.navigate(['/account/super-admin/property-details']);
  }

  // ngOnDestroy () {
  //   this.persistenceservice.remove('list_of_properties', StorageType.SESSION);
  // }

}
