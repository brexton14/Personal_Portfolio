import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { AppComponent } from '../../app.component';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [
    RouterLink,
    NgIf
  ],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(
    public authService: AuthService,
    private appComponent: AppComponent
  ) {}

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

  closeRegisterModal(): void {
    this.appComponent.closeRegisterModal();
  }
}
