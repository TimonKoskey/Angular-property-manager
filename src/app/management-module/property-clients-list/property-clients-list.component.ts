import { Component, OnInit, Input } from '@angular/core';
import { PropertyResourceService } from '../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { LoginServiceService } from '../services/login-service/login-service.service';
import { PersistenceService, StorageType} from 'angular-persistence';

@Component({
  selector: 'app-property-clients-list',
  templateUrl: './property-clients-list.component.html',
  styleUrls: ['./property-clients-list.component.css']
})
export class PropertyClientsListComponent implements OnInit {
  @Input() property_id;
  tenants_list;

  constructor(
    private loginservice: LoginServiceService,
    private propertyservice: PropertyResourceService
  ) { }

  ngOnInit() {
    console.log ( this.property_id );
    this.loginservice.getTenantList(this.property_id).subscribe(data => {
      // console.log ( data );
      this.tenants_list = data;
    });
  }

}
