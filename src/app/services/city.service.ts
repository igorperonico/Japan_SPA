import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from '../shared/models/cities';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  url = "http://localhost:3000/cities";
  constructor(private httpClient: HttpClient) { }

  getAllCities(): Observable<Cities[]> {
    return this.httpClient.get<any>(this.url);
  }
}
