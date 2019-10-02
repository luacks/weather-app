import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  weatherService: WeatherService;

  constructor(weatherService: WeatherService, private router: Router) { 
    this.weatherService = weatherService;
  }

  ngOnInit() {
  }

  search( value ){
    this.router.navigate(['/search'], { queryParams: { q: value } });
    this.weatherService.find(value)
      .subscribe( (response: any) => {
        if( response.list ) {
          console.log(response.list)
          this.weatherService.cities = response.list;
        }
      });
  }
}
