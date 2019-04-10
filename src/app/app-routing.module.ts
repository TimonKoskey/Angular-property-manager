import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'management',
      loadChildren: './management-module/management.module#ManagementModule'
    },
    {
      path: '',
      loadChildren: './tenant-dashboard-module/tenant-dashboard.module#TenantDashboardModule'
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
    {path: '**', redirectTo: ''},
  ];

  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],

    exports: [
      RouterModule,
    ],
  })

  export class AppRoutingModule {}

