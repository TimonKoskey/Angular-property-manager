import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';
import { TenantAuthComponent } from './tenant-auth/tenant-auth.component';
import { RepairsFormComponent } from './repairs-form/repairs-form.component';
import { HomeDisplayComponent } from './home-display/home-display.component';


const routes: Routes = [
    { path: 'account', component: TenantDashboardComponent, children: [
      { path: 'home', component: HomeDisplayComponent},
      { path: 'request-repairs', component: RepairsFormComponent},
        ] },
    { path: 'login', component: TenantAuthComponent},

    { path: '',               redirectTo: 'login', pathMatch: 'full' },
    {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TenantDashboardRoutingModule { }
