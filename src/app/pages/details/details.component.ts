import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public weatherService: WeatherService;
  private locationId: string;
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
        this.forecastList = response.list;
        this.weatherService.loading = false;
      });

    this.weatherService.getWeather(this.locationId)
      .subscribe( (response: any) => {
        this.weather = response;
      })
  }

}
