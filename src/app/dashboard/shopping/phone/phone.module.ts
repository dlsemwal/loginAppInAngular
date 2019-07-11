import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneComponent } from './phone.component';

@NgModule({
  declarations: [PhoneComponent],
  imports: [
    CommonModule,
    PhoneRoutingModule
  ]
})
export class PhoneModule { }
