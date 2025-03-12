import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { SharedModule } from '@app/shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';


const imports = [CommonModule, SharedModule, ContactRoutingModule];

const declarations = [ ContactComponent];


@NgModule({
  imports: [
    ...imports,
  ],
  declarations: [...declarations]
})
export class ContactModule { }


