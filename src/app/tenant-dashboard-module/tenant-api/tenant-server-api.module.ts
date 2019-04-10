import { ModuleWithProviders, NgModule } from '@angular/core';
import { TenantServerApiService } from './tenant-server-api.service';

@NgModule({})

export class TenantServerApiModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TenantServerApiModule,
            providers:    [ TenantServerApiService]
        };
    }
}
