import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { LayoutComponent } from './layout/layout.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '', component: ShoppingComponent,
    children: [
      { path: '', component: LayoutComponent },
      { path: 'cart', component: CartComponent },
      { path: 'phone', loadChildren: './phone/phone.module#PhoneModule' },
      { path: 'camera', loadChildren: './camera/camera.module#CameraModule' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
