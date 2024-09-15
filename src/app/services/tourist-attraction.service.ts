import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/users';
import { TouristAttraction } from '../models/touristAttractions';

@Injectable({
  providedIn: 'root'
})
export class TouristAttractionService {

  url = 'http://localhost:3000/touristAttractions';
  constructor(private httpClient: HttpClient) { }

  getTouristAttractions(): Observable<TouristAttraction[]> {
    return this.httpClient.get<any>(this.url);
  }

  getEmployeeById(id:number): Observable<ApiResponse<TouristAttraction>>{
    return this.httpClient.get<ApiResponse<TouristAttraction>>(`${this.url}/${id}`);
  }

  createEmployee(touristAttraction:TouristAttraction): Observable<ApiResponse<TouristAttraction>>{
    return this.httpClient.post<ApiResponse<TouristAttraction>>(this.url, touristAttraction);
  }

  updateEmployee(id:number, touristAttraction:TouristAttraction): Observable<ApiResponse<TouristAttraction>>{
    return this.httpClient.put<ApiResponse<TouristAttraction>>(`${this.url}/${id}`, touristAttraction);
  }

  deleteEmployee(id?:number): Observable<any>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }



}
