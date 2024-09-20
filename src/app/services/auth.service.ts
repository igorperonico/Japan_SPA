import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../shared/models/login';
import { Observable } from 'rxjs';
import { User } from '../shared/models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://api.escuelajs.co/api/v1/auth';

  constructor(private httpClient: HttpClient) { }

  login(login: Login): Observable<Login> {
    return this.httpClient.post<Login>(`${this.url}/login`, login)
  }
  getCurrentUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/profile`)
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
