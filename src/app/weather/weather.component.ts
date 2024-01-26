import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  myweather : any;
  iconUrl : string = '';
  city : string = 'Atlanta';
  units : string = 'imperial';
  
  constructor(private weatherService: WeatherService){

  }

  ngOnInit() : void{
    this.getWeather(this.city);
    
  }

  OnSubmit(){
      this.getWeather(this.city);
      this.city = '';

  }
  private getWeather(_city:string){
    this.weatherService.getweather(_city,this.units).subscribe({

      next: (res) => {
        console.log(res);
        this.myweather = res;
        console.log(this.myweather);
        this.iconUrl = 'https://openweathermap.org/img/wn/' + this.myweather.weather[0].icon +'@2x.png';
      },

      error:(error)=>console.log(error.message),

      complete: () => console.info('API call completed')
    })
  }

}
