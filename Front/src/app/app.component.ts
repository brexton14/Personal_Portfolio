import {Component, HostListener} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {filter} from 'rxjs';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {BtcChartComponent} from './widgets/btc-chart/btc-chart.component';
import {EthChartComponent} from './widgets/eth-chart/eth-chart.component';
import {RegisterComponent} from './pages/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, LoginComponent, FormsModule, BtcChartComponent, EthChartComponent, NgOptimizedImage, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';
  showMainLayout = true;
  isLoggedIn = false;
  showLoginModal = false;
  showRegisterModal = false;

  constructor(private router: Router){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showMainLayout = event.url === '/';
        this.isLoggedIn = localStorage.getItem('loggedIn') === 'true';
      });
  }
  // login modal
  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }
  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }
  //close modal with escape button
  @HostListener('window:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    this.closeLoginModal();
  }
  //Register modal
  openRegisterModal(): void {
    this.showRegisterModal = true;
  }

  closeRegisterModal(): void {
    this.showRegisterModal = false;
  }

}

