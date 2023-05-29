import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApinewsService {
  constructor( private _http : HttpClient ) { }

  // top headlines api url
  apihd = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=4d050602d9fc4bdb87c545dc24782581';

  // technology api url
  apitech = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4d050602d9fc4bdb87c545dc24782581';

  // business api url
  apibuzz = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4d050602d9fc4bdb87c545dc24782581'

  hd_news_api() : Observable <any>{
    return this._http.get(this.apihd);
  }

  tech_news_api() : Observable <any>{
    return this._http.get(this.apitech);
  }

  buzz_news_api() : Observable <any>{
    return this._http.get(this.apibuzz);
  }

}
