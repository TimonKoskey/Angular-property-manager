import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PropertyResourceService } from '../services/property-api/property-resource.service';
import { LoginServiceService } from '../services/login-service/login-service.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  private display_button = true;
  private display_form = false;
  private add_admin_form;
  private added_admins = [];
  db_results;

  @Output() add_admin = new EventEmitter<boolean>();

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private propertyservice: PropertyResourceService,
    private loginservice: LoginServiceService
  ) { }

  ngOnInit() {
    this.add_admin_form = this.fb.group({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
    });
  }

  func_adda_admin_emitter () {
    this.add_admin.emit(true);
  }

  registerAdmin() {
    this.display_button = false;
    this.display_form = true;
  }

  saveAndAdd(LoginDir, form_value) {
    const admin_details = {
      role_id: 'administrator',
      user_details: {
      first_name: form_value['first_name'],
      last_name: form_value['last_name'],
      email: form_value['email']
    }
  };

    this.loginservice.registerAdmin(admin_details).subscribe(results => {
      this.db_results = results;
      this.added_admins.push(admin_details);
      LoginDir.resetForm({});
      console.log(results);
    });

    // console.log(admin_details);
  }

  saveAndExit(LoginDir, form_value) {
    const admin_details = {
      role_id: 'administrator',
      user_details: {
      first_name: form_value['first_name'],
      last_name: form_value['last_name'],
      email: form_value['email']
    }
  };

    this.loginservice.registerAdmin(admin_details).subscribe(results => {
      this.db_results = results;
      this.added_admins.push(admin_details);
      LoginDir.resetForm({});
      this.display_button = true;
      this.display_form = false;
      // this.func_adda_admin_emitter();
    });


    // window.location.reload();
  }

  exit(LoginDir) {
    LoginDir.resetForm({});
    this.display_button = true;
    this.display_form = false;
  }

}
