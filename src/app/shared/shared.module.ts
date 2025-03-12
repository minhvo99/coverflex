// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from './components/button/button.component';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { BannerComponent } from './components/banner/banner.component';

const imports = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    MenubarModule,
    BadgeModule,
    DropdownModule,
    ProgressSpinnerModule,
    AngularSvgIconModule,
    CalendarModule,
    FileUploadModule,
    InputTextareaModule,
    TimelineModule,
    CardModule
];

const declarations = [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    BannerComponent
];

@NgModule({
    imports: [
        ...imports,
      
    ],
    declarations: [...declarations],
    exports: [...imports, ...declarations],
})
export class SharedModule {}
