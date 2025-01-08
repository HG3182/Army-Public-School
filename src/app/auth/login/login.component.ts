import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service.service';  // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,  // Inject AuthService
    private router: Router
  ) {}

  onSubmit() {
    const payload = { 
      email: this.email, 
      password: this.password 
    };
    
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        this.authService.storeToken(response.token);  // Store token using AuthService
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Login failed. Please try again.';
      }
    });
  }
}
