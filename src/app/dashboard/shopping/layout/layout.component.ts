import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  images;
  constructor(common: CommonService) {
    common.getShoppingProd().subscribe(res => {
      this.images = res;
      this.images = this.images.slice(0, 4);
      console.log(res, this.images);
    });
   }

  ngOnInit() {

  }

}
