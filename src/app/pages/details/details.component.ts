import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  private locationId: string;
  public days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Decr'];
  public weatherService: WeatherService;
  public forecastList: Array<any>;
  public weather: any;

  constructor(weatherService: WeatherService, private router: Router, private route: ActivatedRoute) {
    this.weatherService = weatherService;
    this.locationId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.weatherService.loading = true;
    this.weatherService.getForecast(this.locationId)
      .subscribe( (response: any) => {
        this.forecastList = response.list.map( item => {
          return {
            ...item,
            dt: new Date(item.dt * 1000)
          }
        });
        this.weatherService.loading = false;
      });

    this.weatherService.getWeather(this.locationId)
      .subscribe( (response: any) => {
        this.weatherService.search = response.name;
        this.weather = response;
        this.weather.dt = new Date(this.weather.dt * 1000);
        let { sunrise, sunset } = this.weather.sys;

        this.weather.sys.sunrise = new Date(sunrise * 1000);
        this.weather.sys.sunset = new Date(sunset * 1000);
      })
  }

}
