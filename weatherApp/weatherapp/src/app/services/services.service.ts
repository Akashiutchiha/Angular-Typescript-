import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { WeatherData } from "../Interfaces/data_format"
// import { WeatherData } from "../Interfaces/data_format"

// import { Inject, Injectable } from "@angular/core"
@Injectable({
  providedIn: 'root'
})
export class ServicesService{

    
    constructor(private http: HttpClient) { }

    weatherData: WeatherData = {
        description: '',
        temp: 0,
        feels_like: 0,
        main: 0,
        name: '',
        wind_speed: 0
}

    getweather(location:string){
        // getting the weather from the API
        this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=52cd5705d8d3383de1c55d90adf0c2e6`).
        subscribe((data: any) => {
             this.weatherData = {
                description: data.weather[0].description,
                temp: data.main.temp,
                feels_like: data.main.feels_like,
                main: data.weather[0].main,
                name: data.name,
                wind_speed: data.wind.speed
        }
        console.log(this.weatherData)
    }
    )}
}
