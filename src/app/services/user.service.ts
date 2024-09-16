import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, User, UserForm } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://api.escuelajs.co/api/v1/users';

  constructor(private httpClient: HttpClient) { }

  getUserById(id: number): Observable<ApiResponse<User>> {
    return this.httpClient.get<ApiResponse<User>>(`${this.url}/${id}`);
  }

  createUser(user: UserForm): Observable<any> {
    return this.httpClient.post<any>(this.url, user);
  }

  updateEmployee(id: number, user: User): Observable<ApiResponse<User>> {
    return this.httpClient.put<ApiResponse<User>>(`${this.url}/${id}`, user);
  }

  deleteEmployee(id?: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
