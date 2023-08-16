import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../Interfaces/data_format';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(private http: HttpClient, private weatherService: ServicesService) { }
  location: string = ""
  weather_f_s: any;
  weather : ServicesService = new ServicesService(this.http)
  getweather(event: any){
    event.preventDefault()
    this.weather.getweather(this.location)
    this.weather_f_s = this.weather.weatherData
    console.log(this.weather_f_s)
  }
  
}
