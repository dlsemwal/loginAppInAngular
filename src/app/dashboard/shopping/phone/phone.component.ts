import { Component, OnInit } from '@angular/core';
import { images } from '../../../config/config';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  title = 'Mobile Phone';
  images;
  constructor(common: CommonService) {
    common.getShoppingProd().subscribe(res => {
      this.images = res;
    });
   }

  ngOnInit() {
  }

}
