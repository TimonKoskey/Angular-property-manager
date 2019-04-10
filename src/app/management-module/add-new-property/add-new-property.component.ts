import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertyResourceService } from '../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { PersistenceService, StorageType} from 'angular-persistence';
import { LoginServiceService } from '../services/login-service/login-service.service';

@Component({
  selector: 'app-add-new-property',
  templateUrl: './add-new-property.component.html',
  styleUrls: ['./add-new-property.component.css']
})
export class AddNewPropertyComponent implements OnInit  {
  addPropertyForm: FormGroup;
  can_add_propertyUnits = false;
  private display_results = false;
  private results;


  constructor(
    private loginservice: LoginServiceService,
    private fb: FormBuilder,
    private propertyservice: PropertyResourceService,
    private router: Router,
    private peristenceservice: PersistenceService,
    ) {}

  ngOnInit() {

    this.addPropertyForm = this.fb.group({
      Property_name : ['', Validators.required],
      Property_type : ['', Validators.required],
      Number_of_units : ['', Validators.required],
      Availlable_units : ['', Validators.required],
      Occupied_units : ['', Validators.required],
      Property_pictures : ['', Validators.required],
    });
  }

  saveChanges (FormDir, params) {
    const property_params = {
      'property_name' : params.Property_name,
      'property_type' : params.Property_type,
      'occupied_units' : params.Occupied_units,
      'number_of_units' : params.Number_of_units,
      'availlable_units' : params.Availlable_units,
    };


    this.propertyservice.addProperty(property_params).subscribe(data => {
      console.log(data);
      this.results = data;
      this.can_add_propertyUnits = true;
      this.display_results = true;
      this.peristenceservice.set('property_id', data['id'],
      {type: StorageType.SESSION});
      });

  }

  exit() {
    this.addPropertyForm.reset({});
    if (this.can_add_propertyUnits) {
      this.router.navigate(['/account/super-admin/property-details']);
    } else {
      this.router.navigate(['/account/super-admin/dashboard']);
    }
  }

}

