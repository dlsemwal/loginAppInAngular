import { Component, OnInit } from '@angular/core';
import { images } from '../../../config/config';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  title = 'Mobile Phone';
  images = images;
  constructor() {

  }

  ngOnInit() {
  }

}
