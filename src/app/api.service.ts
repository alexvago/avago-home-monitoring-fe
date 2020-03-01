import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'https://europe-west1-avago-home-automation-dev.cloudfunctions.net/avago-home-last-temperature ';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLastTemperature() {
    return this.http.get(URL);
  }
}
