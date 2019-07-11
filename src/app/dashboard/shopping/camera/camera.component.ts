import { Component, OnInit } from '@angular/core';
import { images } from '../../../config/config';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  title = 'Camera';
  images = images;
  constructor() {

  }

  ngOnInit() {
  }

}
