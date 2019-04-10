import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ManagementLoginRouteGuard, SuperAdministratorRouteGuard } from './services/login-service/loginrouteguard.guard';

import { ContentHolderComponent } from './content-holder/content-holder.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

import { AllClientsListComponent } from './all-clients-list/all-clients-list.component';
import { AdminisratorsListComponent } from './adminisrators-list/adminisrators-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AdminisratorDetailsComponent } from './adminisrator-details/adminisrator-details.component';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
import { AddNewUnitComponent } from './add-new-unit/add-new-unit.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { PropertyDetailDisplayComponent } from './property-detail/details-display/property-details-display.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditPropertyComponent } from './add-new-property/edit-property/edit-property.component';
import { SuperadminViewComponent } from './property-list/superadmin-view/superadmin-view.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },

    { path: 'account/:permission-level', component: ContentHolderComponent,
      canActivate: [ManagementLoginRouteGuard],
      children:  [
      { path: '', component: SuperAdminDashboardComponent,
      children:	[
        { path: 'dashboard', component: SuperadminViewComponent },
        { path: 'property-details', component: PropertyDetailComponent, children: [
          { path: '', component: PropertyDetailDisplayComponent },
          { path: 'edit', component: EditPropertyComponent },
          { path: 'unit/details', component: UnitDetailsComponent },
        ] },
        { path: 'tenants/all', component: AllClientsListComponent },
        { path: 'admins', component: AdminisratorsListComponent},
        { path: 'client/details', component: ClientDetailsComponent },
        { path: 'admin/details', component: AdminisratorDetailsComponent },
        { path: 'property/new', component: AddNewPropertyComponent,
          canActivate: [SuperAdministratorRouteGuard]},
        { path: 'property/unit/add', component: AddNewUnitComponent },

        { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
    ]},
    ]
},

{ path: '',
redirectTo: '',
pathMatch: 'full'
},

{path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes)
    RouterModule.forChild(routes),
  ],
  providers: [ManagementLoginRouteGuard, SuperAdministratorRouteGuard],

  exports: [
    RouterModule,
  ],
})
export class DashboardRoutingModule { }
