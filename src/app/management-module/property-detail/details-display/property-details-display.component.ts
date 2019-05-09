import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginServiceService } from '../../services/login-service/login-service.service';
import { PropertyResourceService } from '../../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { PersistenceService, StorageType} from 'angular-persistence';

@Component({
  selector: 'app-detail-display-list',
  templateUrl: './property-detail-display.component.html',
  styleUrls: ['./property-detail-display.component.css']
})
export class PropertyDetailDisplayComponent implements OnInit, OnDestroy {
  property_id;
  private property_details;
  units_list;
  rent_status = 'payed';
  status = true;
  base_url;

  constructor(
    private loginservice: LoginServiceService,
    private dbservice: PropertyResourceService,
    private peristenceservice: PersistenceService,
    private route: Router
  ) { }

  ngOnInit() {
    this.base_url = this.loginservice.userAccountBaseUrl();
    this.property_id = this.peristenceservice.get('property_id', StorageType.SESSION);

    this.dbservice.fetchPropertyDetails(this.property_id).subscribe(results => {
      this.property_details = results;
      console.log(this.property_details);
      this.peristenceservice.set('property_details', this.property_details,
      {type: StorageType.SESSION});
    });

    this.dbservice.getUnitsList(this.property_id).subscribe(results => {
      this.units_list = results;
      console.log(results);
    });
  }

  editProperty() {
    this.route.navigate([`/${this.base_url}/property-details/edit`]);
  }

  deleteProperty() {
    this.dbservice.DeleteProperty(this.property_id).subscribe(results => {
      this.route.navigate([`/${this.base_url}/dashboard`]);
    });
  }

  viewUnitDetails(unit) {
    this.peristenceservice.set('unit_details', unit, {type: StorageType.SESSION});
    this.route.navigate([`/${this.base_url}/property-details/unit/details`]);
  }

  ngOnDestroy() {
    // this.peristenceservice.remove('property_details', StorageType.SESSION);
  }

}
