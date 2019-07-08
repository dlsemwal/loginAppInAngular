import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  products;
  constructor(private common: CommonService) { }

  ngOnInit() {
    this.common.getProducts().subscribe(res => {
      this.products = res;
      console.log(this.products);

    });
  }

}
