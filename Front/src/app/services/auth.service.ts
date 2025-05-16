import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth'; // Your backend URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password }, { responseType: 'text' });
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Adjust based on your auth logic
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
