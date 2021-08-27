import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("https://run.mocky.io/v3/45900f32-75b7-443e-b3a0-ac6c4eb160ac").pipe(map((result: any) => result));

  }
}