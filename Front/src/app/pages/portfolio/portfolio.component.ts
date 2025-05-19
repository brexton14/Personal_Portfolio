import {Component, Injectable} from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { AppComponent } from '../../app.component';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment.prod';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  imports: [
    RouterLink,
    NgIf,
    FormsModule,
    NgForOf,
    NgOptimizedImage
  ],
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  city: string = '';
  scrapeResults: any[] = [];
  searchAttempted = false;

  constructor(
    private http: HttpClient,
    public authService: AuthService,
    private appComponent: AppComponent
  ) {}
  runScraper() {
    this.searchAttempted = true;

    this.http.post<any[]>(`${environment.apiUrl}/api/scraper`, { city: this.city })
      .subscribe(
        res => {
          this.scrapeResults = res;
        },
        err => {
          console.error('Error:', err);
        }
      );

  }


  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  openLoginModal(): void {
    this.appComponent.openLoginModal();
  }

  logout(): void {
    this.authService.logout();
  }
  openRegisterModal(): void {
    this.appComponent.openRegisterModal();
  }
  clearResults() {
    this.scrapeResults = [];
    this.city = '';
    this.searchAttempted = false;
  }

}
