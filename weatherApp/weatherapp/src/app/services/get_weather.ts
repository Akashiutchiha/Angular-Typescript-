import { HttpClient } from "@angular/common/http"
import { Inject } from "@angular/core"
// import { Inject, Injectable } from "@angular/core"

export class WeatherServices{

    
    constructor(private http: HttpClient) { }
    

    getweather(location:string){
        // getting the weather from the API
        this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=52cd5705d8d3383de1c55d90adf0c2e6`).
        subscribe((data: any) => {
            
        }

    )}
}