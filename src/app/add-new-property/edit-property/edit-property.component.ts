import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertyResourceService } from '../../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { PersistenceService, StorageType} from 'angular-persistence';
import { LoginServiceService } from '../../services/login-service/login-service.service';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit, OnDestroy {
  editPropertyForm: FormGroup;
  property_details;
  can_add_propertyUnits = false;
  private display_results = false;
  private results;
  constructor(
    private loginservice: LoginServiceService,
    private fb: FormBuilder,
    private propertyservice: PropertyResourceService,
    private router: Router,
    private peristenceservice: PersistenceService,
  ) { }

  ngOnInit() {
    this.property_details = this.peristenceservice.get('property_details', StorageType.SESSION);
    console.log (this.property_details);

    if (this.property_details) {

      this.can_add_propertyUnits = true;

      this.editPropertyForm = this.fb.group({
        Property_name : [this.property_details.property_name, Validators.required],
        Property_type : [this.property_details.property_type, Validators.required],
        Number_of_units : [this.property_details.number_of_units, Validators.required],
        Availlable_units : [this.property_details.availlable_units, Validators.required],
        Occupied_units : [this.property_details.occupied_units, Validators.required],
      });
    }
  }

  saveChanges (FormDir, params) {
    const property_params = {
      'property_name' : params.Property_name,
      'property_type' : params.Property_type,
      'occupied_units' : params.Occupied_units,
      'number_of_units' : params.Number_of_units,
      'availlable_units' : params.Availlable_units,
    };

    if (this.property_details) {
      console.log(this.property_details);
      this.propertyservice.EditProperty(this.property_details['id'], property_params).subscribe(results => {
        // console.log(results);
        this.results = results;
        this.display_results = true;
      });
    }
  }

  exit() {
    this.editPropertyForm.reset({});
    if (this.property_details) {
      this.router.navigate(['/account/super-admin/property-details']);
    }
  }

  ngOnDestroy() {
    this.peristenceservice.remove('property_details', StorageType.SESSION);
  }

}
