import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/portfolio']).then(success => {
          if (!success) {
            console.error('Navigation to /portfolio failed.');
          }
        });
      },
      error: () => {
        alert('Invalid username or password.');
      }
    });
  }
}
