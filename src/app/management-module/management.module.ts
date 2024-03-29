import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { PersistenceModule } from 'angular-persistence';

import { DashboardRoutingModule } from './management-app.routing';
import { ComponentsModule } from './components/components.module';

import { PropertyDetailComponent} from './property-detail/property-detail.component';
import { PropertyDetailDisplayComponent } from './property-detail/details-display/property-details-display.component';
import { PropertyResourceService } from './services/property-api/property-resource.service';
import { TokenInterceptor } from './services/login-service/token.interceptor';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { ContentHolderComponent } from './content-holder/content-holder.component';
import { LoginServiceModule } from './services/login-service/login-service.module';
import { PropertyClientsListComponent } from './property-clients-list/property-clients-list.component';
import { AllClientsListComponent } from './all-clients-list/all-clients-list.component';
import { AdminisratorsListComponent } from './adminisrators-list/adminisrators-list.component';
import { AdminisratorDetailsComponent } from './adminisrator-details/adminisrator-details.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
import { AddNewUnitComponent } from './add-new-unit/add-new-unit.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PropertyListPopupComponent } from './property-list-popup/property-list-popup.component';
import { EditPropertyComponent } from './add-new-property//edit-property/edit-property.component';
import { SuperadminViewComponent } from './property-list/superadmin-view/superadmin-view.component';
import { AdminViewComponent } from './property-list/admin-view/admin-view.component';
import { ConfirmFormInputComponent } from './confirm-form-input/confirm-form-input.component';
import { WarningPopupComponent } from './warning-popup/warning-popup.component';

@NgModule({
  declarations: [
    PropertyDetailComponent,
    SignInComponent,
    SignUpComponent,
    SuperAdminDashboardComponent,
    ContentHolderComponent,
    PropertyClientsListComponent,
    AllClientsListComponent,
    AdminisratorsListComponent,
    AdminisratorDetailsComponent,
    ClientDetailsComponent,
    AddNewPropertyComponent,
    AddNewUnitComponent,
    UnitDetailsComponent,
    RegisterAdminComponent,
    PropertyDetailDisplayComponent,
    LandingPageComponent,
    PropertyListPopupComponent,
    EditPropertyComponent,
    SuperadminViewComponent,
    AdminViewComponent,
    ConfirmFormInputComponent,
    WarningPopupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    DashboardRoutingModule,
    HttpClientModule,
    LoginServiceModule.forRoot(),
    PersistenceModule,
    ModalModule.forRoot(),
  ],

  entryComponents: [ PropertyListPopupComponent, WarningPopupComponent ],

  providers: [
    PropertyResourceService,
    CookieService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }
  ]

})

export class ManagementModule { }
