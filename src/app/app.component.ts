import { Component } from '@angular/core';
import { LStorageService } from './services/l-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private lStorage: LStorageService) {

  }

}

