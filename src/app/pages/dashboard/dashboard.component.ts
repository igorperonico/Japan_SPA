import { Component } from '@angular/core';
import { User } from '../../shared/models/users';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  user: User = {
    id: 0,
    email: "",
    password: "",
    name: "",
    role: "",
    avatar: ""
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.getCurrentUser().subscribe({
      next: (res) => {
        this.user.avatar = res.avatar;
        this.user.email = res.email;
        this.user.name = res.name;
        this.user.role = res.role;
      }
    });
  }

}
