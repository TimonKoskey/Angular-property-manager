import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// import { TenantDashboardModule } from './tenant-dashboard-module/tenant-dashboard.module';
// import { ManagementModule } from './management-module/management.module';
import { AppRoutingModule } from './app-routing.module';

import { MyAppComponent } from './mydashboard.component';

@NgModule({
  declarations: [ MyAppComponent ],

  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    // TenantDashboardModule,
    // ManagementModule,
    // RouterModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [MyAppComponent]
})

export class AppModule { }
