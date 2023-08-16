import { Component } from '@angular/core';
import { WeatherServices } from '../services/get_weather';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(private http: HttpClient) { }
  location: string = ""
  weather : WeatherServices = new WeatherServices(this.http)
  getweather(event: any){
    event.preventDefault()
    this.weather.getweather(this.location)
  }
  
}
