
import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { BannerComponent } from './components/banner/banner.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { OurServiceComponent } from './components/our-service/our-service.component';

const imports = [CommonModule, SharedModule, AboutRoutingModule];

const declarations = [AboutComponent, BannerComponent, TimeLineComponent, OurServiceComponent];

@NgModule({
    declarations: [...declarations],
    imports: [...imports],
    exports: [],
})
export class AboutModule {}
