import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private _http:HttpClient) { }
businessnewsurl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8ca151aa9fca45a0a034db19e19cd9dc";
businessnewsdata:any=[];
technewsurl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8ca151aa9fca45a0a034db19e19cd9dc"
technewsdata:any=[];
businessnews():Observable<any>{
return this._http.get(this.businessnewsurl);
}
technews():Observable<any>{
return this._http.get(this.technewsurl);
}
}
