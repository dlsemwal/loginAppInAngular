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


}
