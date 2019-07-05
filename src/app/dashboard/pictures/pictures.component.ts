import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { config } from '../../config/config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  constructor(private common: CommonService, private route: ActivatedRoute, private router: Router) {
    this.getImg();
  }
  img: any;
  page: any;
  pages: number;
  currentPage: number;
  ngOnInit() { }
  getImg() {
    this.common.getImg()
      .subscribe((data) => {
        this.img = data;
        this.pages = Math.ceil(this.img.length / config.perPageData + 2);
        this.getPage(1);
      });
  }
  next(i) {
    this.getPage(+i + 1);
  }
  previous(i) {
    this.getPage(+i - 1);
  }
  getPage(i) {

    if (i >= 1 && i <= this.pages) {
      this.page = this.img.slice((config.perPageData + 2) * (i - 1), i * (config.perPageData + 2));
      this.currentPage = +i;
      this.route.params.subscribe(page => {
        if (page != i) {
          this.router.navigate([`/dashboard/pictures/${i}`]);
        }
      });

    }
  }
}

