import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { LayoutComponent } from './layout/layout.component';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [ShoppingComponent, LayoutComponent, CarouselComponent, CartComponent],
  imports: [
    CommonModule,
    NgbModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
