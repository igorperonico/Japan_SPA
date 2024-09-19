import { Component } from '@angular/core';
import { Login } from '../../shared/models/login';
import { AuthService } from '../../services/auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: Login = {
    email: "",
    password: ""
  }

  showPassword: boolean = false;


  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  onLogin() {
    this.authService.login(this.login).subscribe({
      next: (response:any) => {
        localStorage.setItem("token", response.access_token)
        localStorage.setItem("role", response.access_role)
        this.router.navigateByUrl('')
      },
      error: () => {
        this.toastr.error('Invalid username or password', 'Error')
      }
    })
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
