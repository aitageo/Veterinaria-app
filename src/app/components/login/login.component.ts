import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ResponseApi as response } from '../../interfaces/response-api';
import Swall from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [
    FormsModule
  ], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  token: string = '';
  error: string = '';

  constructor(private auth: AuthService) {}

  login() {
    if (!this.email || !this.password) {
      this.error = 'Por favor llena todos los campos';
      return;
    }

    this.auth.login(this.email, this.password).subscribe({
      next: (response: response) => {
        this.token =  response.Login.token
        console.log(`Logueo exitoso: este es el token: ${this.token}`);
        localStorage.setItem('token',JSON.stringify(this.token));
        Swall.fire({
         title: "Bienvenido",
         icon: 'success',
         timer: 1500
        })
      },
      error: (err) => {
        this.error = 'Error al iniciar sesión';
      }
    });
  }
}

