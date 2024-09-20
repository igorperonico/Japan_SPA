import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state): Observable<boolean> => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['role'];

  return authService.getCurrentUser().pipe(
    map((res) => {
      const userRole = res.role;

      if (userRole !== expectedRole) {
        router.navigate(['/']);
        return false;
      }
      return true;
    })
  );
};
