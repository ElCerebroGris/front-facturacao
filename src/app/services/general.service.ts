import { GeneralConstants } from './../constants/GeneralConstants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  baseUrl = 'https://yellen-api.herokuapp.com//v1/'

  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private http: HttpClient) { }

  postter(url: string, data: any): Observable<any> {
    return this.http.post(this.baseUrl + url, data, {
      headers: this.headers
    });
  }

  putter(url: string, data: any): Observable<any> {
    return this.http.put(this.baseUrl + url, data, {
      headers: this.headers
    });
  }

  getter(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url);
  }
}
