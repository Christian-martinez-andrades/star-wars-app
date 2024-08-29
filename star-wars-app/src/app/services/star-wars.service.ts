import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = environment.backurl;

  constructor(private http: HttpClient) { }

  getPeople(sort: string = '', order: string = ''): Observable<any> {
    let params = new HttpParams();
    if (sort) {
      params = params.set('sort', sort);
    }
    if (order) {
      params = params.set('order', order);
    }
    return this.http.get<any>(`${this.apiUrl}people/`, { params });
  }
  
  getPlanets(sort: string = '', order: string = ''): Observable<any> {
    let params = new HttpParams();
    if (sort) {
      params = params.set('sort', sort);
    }
    if (order) {
      params = params.set('order', order);
    }
    return this.http.get<any>(`${this.apiUrl}planets/`, { params });
  }
}
