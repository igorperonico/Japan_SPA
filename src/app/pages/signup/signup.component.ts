import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) {
    this.signupForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      role: new FormControl('customer'),
      avatar: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.userService.createUser(this.signupForm.value).subscribe({
        next: () => {
          this.toastr.success('User created successfully', 'Success');
          this.router.navigate(['/login']);
        }
      }
      );
    } else {
      this.toastr.warning('Please fill in all required fields correctly.', 'Warning');
      console.log('Erro')
    }
  }
}

