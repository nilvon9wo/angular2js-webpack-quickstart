import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppTitleComponent } from './app-title/app-title.component';
import { UserService } from './users/user.service';
import { UserServiceConfig } from './users/user-service-config';

@NgModule( {
    declarations: [AppTitleComponent],
    exports: [AppTitleComponent],
    imports: [CommonModule],
    providers: [UserService]
})
export class CoreModule {
    
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error ('CoreModule is already loaded.  Import it in the AppModule only.');
        }
    }

    static forRoot( config: UserServiceConfig ): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [{
                provide: UserServiceConfig,
                useValue: config
            }]
        }
    }
}