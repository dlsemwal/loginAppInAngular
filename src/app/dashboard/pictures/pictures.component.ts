import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  constructor(private common: CommonService) { }
  img;
  ngOnInit() {
    this.showImg();
  }
  showImg() {
    this.common.getImg()
      .subscribe((data) => {
        this.img = data;
      }
      );
  }

}
