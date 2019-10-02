import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  weatherService: WeatherService;
  goback = false;

  @ViewChild('root', {static: false}) root: ElementRef;
  
  constructor(weatherService: WeatherService, private router: Router, private location: Location) { 
    this.weatherService = weatherService;
    
    router.events.subscribe( (route: any) => {
      if( route.snapshot && route.snapshot.routeConfig ){
        if( route.snapshot.routeConfig.path === 'details/:id' ){
          this.root.nativeElement.style.height = '120px';
          this.goback = true;
        }else{
          this.goback = false;
          this.root.nativeElement.style.height = '300px';
        }
      }
    })
  }

  ngOnInit() {
  }

  back(){
    this.root.nativeElement.style.height = '300px';
    this.location.back();
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
