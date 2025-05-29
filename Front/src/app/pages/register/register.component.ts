import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    const payload = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.http.post(`https://brexportfol.us-east-1.elasticbeanstalk.com/api/auth/register`, payload, { responseType: 'text' })
      .subscribe({
        next: () => {
          this.successMessage = 'Account created successfully!';
          this.errorMessage = '';
          setTimeout(() => this.router.navigate(['/login']), 1500);
        },
        error: (err) => {
          this.errorMessage = err.error || 'Registration failed.';
          this.successMessage = '';
        }
      });
  }
  goHome(): void {
    this.router.navigate(['/']).then(success => {
      if (!success) {
        console.error('Navigation to home failed');
      }
    });
  }
}
