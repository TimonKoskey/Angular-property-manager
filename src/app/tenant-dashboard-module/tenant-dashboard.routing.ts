import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';
import { TenantAuthComponent } from './tenant-auth/tenant-auth.component';

const routes: Routes = [
    { path: 'account/home', component: TenantDashboardComponent, children: [
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
