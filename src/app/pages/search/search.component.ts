import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public weatherService: WeatherService;
  private city = '';

  constructor(weatherService: WeatherService, private router: Router, private route: ActivatedRoute) {
    this.weatherService = weatherService;
    route.queryParams.subscribe(params => {
      if(params['q']){
        this.city = params['q'];
        weatherService.search = this.city;
        
        weatherService.find(this.city)
            .subscribe((response: any) => {
              weatherService.cities = response.list;
            }); 
      }
    });
  }

  ngOnInit() {
  }

  navigateDetails( cityId ){
    this.router.navigate(['/details/' + cityId]);
  }

}
