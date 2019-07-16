import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  title = 'Camera';
  images;
  constructor(common: CommonService, private cart: CartService) {
    common.getShoppingProd().subscribe(res => {
      this.images = res;
    });
  }

  ngOnInit() {
  }
  addCart(item) {
    item.quantity = 1;
    this.cart.addCart(item);
  }
  updateQuantity(item, addQuantity) {
    if (addQuantity) {
      this.cart.cart[this.cart.getIndexFromCart(item)].quantity++;
    } else {
      if (this.cart.cart[this.cart.getIndexFromCart(item)].quantity < 2) {
        this.cart.removeFromCart(item);
      } else {
        this.cart.cart[this.cart.getIndexFromCart(item)].quantity--;
      }
    }
  }

}
