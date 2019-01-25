import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SuperadminGuard, AdminGuard, ClientGuard } from './authguard.guard';

import { SignInComponent } from './auth/sign-in/sign-in.component';
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
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditPropertyComponent } from './add-new-property/edit-property/edit-property.component';
import { SuperadminViewComponent } from './property-list/superadmin-view/superadmin-view.component';
// import { UnitDetailsComponent } from './unit-details/unit-details.component';

const routes: Routes = [
    // { path: 'sign-in', component: SignInComponent },
    { path: '', component: LandingPageComponent, children: [
      { path: 'sign-in', component: SignInComponent },
      { path: '',               redirectTo: 'sign-in', pathMatch: 'full' },
    ] },
    { path: 'account', component: ContentHolderComponent, children:  [

      { path: 'super-admin', component: SuperAdminDashboardComponent, canActivate: [SuperadminGuard],
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
        { path: 'property/new', component: AddNewPropertyComponent },
        { path: 'property/unit/add', component: AddNewUnitComponent },
        // { path: 'unit/details/:unit-id', component: UnitDetailsComponent },

        { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
    ]},

    { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard], children: [

    ]},

    // { path: 'client', component: ClientDashboard, canActivate: [ClientGuard], children: [

    // ] },
    ]
},
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
export class DashboardRoutingModule { }
