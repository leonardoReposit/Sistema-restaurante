import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>Iniciar Sesion</h2>
        <div *ngIf="error" class="alert alert-error">{{ error }}</div>
        <form (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label>Usuario</label>
            <input type="text" class="form-control" [(ngModel)]="username" name="username" required>
          </div>
          <div class="form-group">
            <label>Contrasena</label>
            <input type="password" class="form-control" [(ngModel)]="password" name="password" required>
          </div>
          <button type="submit" class="btn btn-primary" [disabled]="loading">
            {{ loading ? 'Ingresando...' : 'Ingresar' }}
          </button>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.loading = true;
    this.error = '';
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Credenciales invalidas';
      }
    });
  }
}
