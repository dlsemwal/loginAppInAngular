import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  title = 'Mobile Phone';
  images;
  constructor(private common: CommonService, private cart: CartService) {
    this.common.getShoppingProd().subscribe(res => {
      this.images = res;
    });
  }

  ngOnInit() {
  }


}
