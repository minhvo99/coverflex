
import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { SharedModule } from '@app/shared/shared.module';

const imports = [CommonModule, SharedModule, AboutRoutingModule];

const declarations = [AboutComponent, TimeLineComponent, OurServiceComponent];

@NgModule({
    declarations: [...declarations],
    imports: [...imports],
    exports: [],
})
export class AboutModule {}
