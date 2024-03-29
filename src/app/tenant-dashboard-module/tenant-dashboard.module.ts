import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersistenceModule } from 'angular-persistence';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { TenantDashboardRoutingModule} from './tenant-dashboard.routing';
import { TenantServerApiModule } from './tenant-api/tenant-server-api.module';

import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';
import { TenantAuthComponent } from './tenant-auth/tenant-auth.component';
import { RepairsFormComponent } from './repairs-form/repairs-form.component';
import { HomeDisplayComponent } from './home-display/home-display.component';

@NgModule({
  imports: [
    CommonModule,
    TenantDashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TenantServerApiModule.forRoot(),
    TypeaheadModule.forRoot(),
    PersistenceModule
  ],
  declarations: [TenantDashboardComponent, TenantAuthComponent, RepairsFormComponent, HomeDisplayComponent],

  // exports: [
  //   TenantDashboardComponent
  // ]
})
export class TenantDashboardModule { }
