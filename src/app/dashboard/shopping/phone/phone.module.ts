import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneComponent } from './phone.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from '../phone/details/details.component';

@NgModule({
  declarations: [PhoneComponent, DetailsComponent],
  imports: [
    CommonModule,
    PhoneRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class PhoneModule { }
