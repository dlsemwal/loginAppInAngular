import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product;

  constructor(private common: CommonService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.getProduct(params.id);
    });

  }
  getProduct(id) {
    this.common.getShoppingProd().subscribe((res: Array<object>) => {
      // tslint:disable-next-line:triple-equals
      this.product = res.filter((value: any) => value.id == id);
      this.product = this.product[0];
    });
  }



  ngOnInit() {
  }

}
