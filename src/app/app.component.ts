import { Component } from '@angular/core';
import {PwaService} from './pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PWADemo';

  constructor(private pwaService: PwaService) {
  }
}
