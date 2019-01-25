import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service/login-service.service';
import { PropertyResourceService } from '../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { PersistenceService, StorageType} from 'angular-persistence';

@Component({
  selector: 'app-table-list',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property_id;
  private property_details;
  units_list;
  display_edit_form = false;

  constructor(
    private loginservice: LoginServiceService,
    private dbservice: PropertyResourceService,
    private peristenceservice: PersistenceService,
    private route: Router
  ) { }

  ngOnInit() {}

}
