import {Component, HostListener} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';
import {filter} from 'rxjs';
import {LoginComponent} from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';
  showMainLayout = true;
  isLoggedIn = false;
  showLoginModal = false;

  constructor(private router: Router){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showMainLayout = !event.url.includes('/login');
        this.isLoggedIn = localStorage.getItem('loggedIn') === 'true';
      })
  }
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
  @HostListener('window:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    this.closeLoginModal();
  }
}

