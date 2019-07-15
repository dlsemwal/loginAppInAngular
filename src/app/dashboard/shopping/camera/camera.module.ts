import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraRoutingModule } from './camera-routing.module';
import { CameraComponent } from './camera.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [CameraComponent, DetailsComponent],
  imports: [
    CommonModule,
    CameraRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class CameraModule { }
