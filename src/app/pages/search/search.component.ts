import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public weatherService: WeatherService;

  constructor(weatherService: WeatherService, private router: Router) {
    this.weatherService = weatherService;
  }

  ngOnInit() {
  }

  navigateDetails( cityId ){
    this.router.navigate(['/details/' + cityId]);
  }

}
