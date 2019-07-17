import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import { AuthModule } from 'app/auth/auth.module';
import { AuthGuard } from 'app/auth/guards/auth.guard';

const routes: Routes = [
    {
        path     : 'sample',
        canActivate: [AuthGuard],
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        AuthModule,
        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
