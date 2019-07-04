import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments;
  constructor(private common: CommonService) { }
  showComments() {
    this.common.getImg()
      .subscribe((data) => {
        this.comments = data;

      });
  }

  ngOnInit() {
    this.showComments();
  }

}
