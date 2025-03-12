import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InforComponent } from './infor.component';


const routes: Routes = [
    {
        path: '',
        component: InforComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InforRoutingModule {}
