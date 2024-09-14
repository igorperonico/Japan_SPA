import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://api.escuelajs.co/api/v1/users';

  constructor(private httpClient: HttpClient) { }

  getUserById(id: number): Observable<ApiResponse<User>> {
    return this.httpClient.get<ApiResponse<User>>(`${this.url}/${id}`);
  }

  createUser(user:User): Observable<ApiResponse<User>>{
    return this.httpClient.post<ApiResponse<User>>(this.url, user);
  }

  updateEmployee(id:string, user:User): Observable<ApiResponse<User>>{
    return this.httpClient.put<ApiResponse<User>>(`${this.url}/${id}`, user);
  }

  deleteEmployee(id?:string): Observable<any>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
