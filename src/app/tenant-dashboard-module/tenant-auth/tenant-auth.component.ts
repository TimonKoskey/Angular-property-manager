import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TenantServerApiService } from '../tenant-api/tenant-server-api.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tenant-auth',
  templateUrl: './tenant-auth.component.html',
  styleUrls: ['./tenant-auth.component.css']
})
export class TenantAuthComponent implements OnInit {
  private tenantValidationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private serverApiService: TenantServerApiService,
    private route: Router
  ) { }

  ngOnInit() {
    this.tenantValidationForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  handleSubmit(tenantValidationForm) {
    const tenantAuthCred = {
      username: tenantValidationForm.username,
      password: tenantValidationForm.password
    };
    this.serverApiService.authenticateTenant(tenantAuthCred).subscribe(results => {
       this.route.navigate(['/account/home']);
    });
  }

}
