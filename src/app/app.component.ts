import { Component } from '@angular/core';
import { LStorageService } from './services/l-storage.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShoppingModule() {
    const url = window.location.href;
    if (url.indexOf('/shopping') > 0) {
      return true;
    } else {
      return false;
    }

  }
  constructor(private lStorage: LStorageService, private cart: CartService) {

  }

}

