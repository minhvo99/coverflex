import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InforComponent } from './infor.component';
import { SharedModule } from '@app/shared/shared.module';
import { InforRoutingModule } from './infor-routing.module';

const imports = [CommonModule, SharedModule, InforRoutingModule];

const declarations = [InforComponent];


@NgModule({
  imports: [
    ...imports
  ],
  declarations: [...declarations]
})
export class InforModule { }
