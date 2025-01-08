import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router 
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    
    if (token) {
      return true;
    }

    // If no token, redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}