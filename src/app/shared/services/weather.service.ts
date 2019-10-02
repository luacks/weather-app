import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  http: HttpClient;
  cities = [];
  loading = false;
  search: string = '';

  constructor(http: HttpClient) { 
    this.http = http;
  }

  find(query){
    this.loading = true;
    return this.http.get(`https://api.openweathermap.org/data/2.5/find?q=${query}&APPID=76d1b43ba3695cfae59aa9f7dc9b4877&units=metric`)
                  .pipe(
                    map(this.extractData));
  }

  getForecast( locationId ){
    this.loading = true;
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?id=${ locationId }&APPID=76d1b43ba3695cfae59aa9f7dc9b4877&units=metric`)
        .pipe(
          map(this.extractData)
        );
  }

  getWeather( locationId ){
    this.loading = true;
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?id=${ locationId }&APPID=76d1b43ba3695cfae59aa9f7dc9b4877&units=metric`)
      .pipe(
        map(this.extractData)
      );
  }

  private extractData(res: Response) {
    let body = res;
    return body;
  }
}
