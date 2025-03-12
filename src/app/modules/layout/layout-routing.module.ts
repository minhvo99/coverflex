import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '',
            },
            {
                path: '',
                loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'about',
                loadChildren: () => import('../about/about.module').then((m) => m.AboutModule),
            },
            {
                path: 'contact',
                loadChildren: () => import('../contact/contact.module').then((m) => m.ContactModule),
            },
            {
                path: 'infor',
                loadChildren: () => import('../infor/infor.module').then((m) => m.InforModule),
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
