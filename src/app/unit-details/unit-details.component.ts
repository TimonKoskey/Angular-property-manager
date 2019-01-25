import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginServiceService } from '../services/login-service/login-service.service';
import { PropertyResourceService } from '../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { PersistenceService, StorageType} from 'angular-persistence';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css']
})
export class UnitDetailsComponent implements OnInit, OnDestroy {
  edit_unit_details = false;
  edit_tenant_details = false;
  edit_payment_details = false;
  confirm_form_input: String = '';
  form_input;
  edit_unit_form: FormGroup;
  edit_tenant_details_form: FormGroup;
  image_file;
  unit_details;

  constructor(
    private loginservice: LoginServiceService,
    private dbservice: PropertyResourceService,
    private peristenceservice: PersistenceService,
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.unit_details = this.peristenceservice.get('unit_details', StorageType.SESSION);
  }

  editUnitDetails() {
    this.edit_unit_form = this.fb.group({
      unit_ID: [this.unit_details.unit_ID],
      unit_size: [this.unit_details.unit_size],
      number_of_rooms: [this.unit_details.number_of_rooms],
      // unit_value: [''],
      unit_purpose: [this.unit_details.unit_purpose]
    });

    this.edit_unit_details = true;
  }

  editTenantDetails() {
    this.edit_tenant_details_form = this.fb.group({
      user_data: this.fb.group({
        first_name: [this.unit_details.tenant_details.user.first_name],
        last_name: [this.unit_details.tenant_details.user.last_name],
        username: [this.unit_details.tenant_details.user.username],
        email: [this.unit_details.tenant_details.user.email]
      }),

      phone_number: [this.unit_details.tenant_details.phone_number],
      occupation: [this.unit_details.tenant_details.occupation],
      relationship_status: [this.unit_details.tenant_details.relationship_status],
      emergency_contact_name: [this.unit_details.tenant_details.emergency_contact_name],
      emergency_contact_relationship: [this.unit_details.tenant_details.emergency_contact_relationship],
      emergency_contact_phone_number: [this.unit_details.tenant_details.emergency_contact_phone_number]
    });

    console.log(this.unit_details.tenant_details.user.first_name);
    this.edit_tenant_details = true;
  }

  handleFileInput(files) {
    this.image_file = files.item(0);
    console.log(this.image_file);
  }

  saveChanges(formValues, formName: String) {
    this.form_input = formValues;
    this.confirm_form_input = formName;
  }

  unitDetailsDataConfirmation(approved: boolean) {
    if (approved) {
      this.dbservice.editUnitDetails(this.unit_details.id, this.form_input).subscribe(results => {
        this.unit_details = results;
        this.peristenceservice.set('unit_details', results, {type: StorageType.SESSION} );
        this.form_input = null;
        this.edit_unit_details = false;
        this.confirm_form_input = '';
        this.edit_tenant_details = false;
        this.edit_payment_details = false;
      });
    } else {
      this.confirm_form_input = '';
      this.form_input = null;
      this.edit_tenant_details = false;
      this.edit_payment_details = false;
      this.edit_unit_details = false;
    }
  }

  ngOnDestroy() {
    this.peristenceservice.remove('unit_details', StorageType.SESSION);
  }
}