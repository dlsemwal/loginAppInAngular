import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  products;
  constructor() { }

  ngOnInit() {

  }


}
