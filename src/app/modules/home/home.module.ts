import { IntegrationSectionComponent } from './components/integration-section/integration-section.component';
import { ComputerCentralSectionComponent } from './components/computer-central-section/computer-central-section.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DigitalizationSection } from './components/digitalization-section/digitalization-section';
import { ServicesSectionComponent } from './components/services-section/services-section.component';

const imports = [CommonModule, SharedModule, HomeRoutingModule];

const declarations = [HomeComponent, DigitalizationSection, ComputerCentralSectionComponent, IntegrationSectionComponent, ServicesSectionComponent];

@NgModule({
    declarations: [...declarations],
    imports: [...imports],
    exports: [],
})
export class HomeModule {}
