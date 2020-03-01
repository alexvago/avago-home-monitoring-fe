import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

import {faThermometerHalf} from '@fortawesome/free-solid-svg-icons';

interface RespType {
  temperature: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  temperatureIcon = faThermometerHalf;
  temperature: any = 0;

  constructor(private api: ApiService) {
  }

  getTemperature() {
    this.api.getLastTemperature().subscribe(
      (response: RespType) => {
        this.temperature = response.temperature;
      }
    );
  }

  ngOnInit() {
    this.getTemperature();
    setTimeout(this.getTemperature, 60000);
  }
}
