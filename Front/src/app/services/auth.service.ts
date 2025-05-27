import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment.prod';
@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/auth/login`, { username, password }, { responseType: 'text' });
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); //auth logic
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
