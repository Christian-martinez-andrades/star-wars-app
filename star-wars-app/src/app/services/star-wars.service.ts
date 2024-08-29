import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}people/`);
  }

  getPlanets(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}planets/`);
  }
}
