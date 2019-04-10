import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from './login-service.service';


@NgModule({})

export class LoginServiceModule {
    // constructor (@SkipSelf() parentModule: LoginServiceModule) {
    //     if (parentModule) {
    //       throw new Error(
    //         'CoreModule is already loaded. Import it in the AppModule only');
    //     }
    // }
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: LoginServiceModule,
          providers:    [ LoginServiceService]
        };
      }
    }
