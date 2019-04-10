import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { PropertyResourceService } from '../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { PersistenceService, StorageType} from 'angular-persistence';
import { LoginServiceService } from '../services/login-service/login-service.service';

@Component({
  selector: 'app-add-new-unit',
  templateUrl: './add-new-unit.component.html',
  styleUrls: ['./add-new-unit.component.css']
})
export class AddNewUnitComponent implements OnInit, OnDestroy {
  add_unit_form: FormGroup;
  router_sub;
  property_details;
  private display_form = true;
  added_units = [];

  constructor(
    private fb: FormBuilder,
    private loginservice: LoginServiceService,
    private propertyservice: PropertyResourceService,
    private router: ActivatedRoute,
    private route: Router,
    private peristenceservice: PersistenceService,
    ) { }

  ngOnInit() {
    this.add_unit_form = this.fb.group({
      Unit_ID: '',
      Unit_size: '',
      Unit_value: '',
      Number_of_rooms: '',
      Is_occupied: ''
    });

    this.property_details = this.peristenceservice.get('property_id', StorageType.SESSION);
  }

  saveAndAdd(FormDir, params) {
    const unit_params = {
      'propertyDetail': this.property_details,
      'unit_ID' : params.Unit_ID,
      'unit_size' : params.Unit_size,
      'number_of_rooms' : params.Number_of_rooms,
      'unit_value' : params.Unit_value
    };
    this.propertyservice.addUnit(unit_params).subscribe(resp => {
      console.log (resp);
      this.added_units.push(resp);
      FormDir.resetForm({});
    });
  }

  saveAndFinish(params) {
    console.log(this.property_details);
    const unit_params = {
      'propertyDetail': this.property_details,
      'unit_ID' : params.Unit_ID,
      'unit_size' : params.Unit_size,
      'number_of_rooms' : params.Number_of_rooms,
      'unit_value' : params.Unit_value
    };

    this.propertyservice.addUnit(unit_params).subscribe(resp => {
      console.log (resp);
      // FormDir.resetForm({});
      this.added_units.push(resp);
      this.display_form = false;
    });
  }

  exit(FormDir) {
      FormDir.resetForm({});
      this.route.navigate(['/account/property-details']);
  }

  ngOnDestroy() {
    // this.router_sub.unsubscribe();
  }

}
