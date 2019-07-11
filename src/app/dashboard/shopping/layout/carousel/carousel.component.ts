import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-shopping-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images;
  constructor(common: CommonService) {
    common.getShoppingProd().subscribe(res => {
      this.images = res;
      this.images = this.images.slice(5, 8);
      console.log(res, this.images);
    });
  }
  ngOnInit() {
  }

}
