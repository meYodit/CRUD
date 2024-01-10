import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate{
  constructor(public authService:AuthService){}

canActivate(
route:ActivatedRouteSnapshot,
state:RouterStateSnapshot){
if( this.authService.isLoggedIn()){
  return true;
}
alert("You are not authorized!")
return false;
}

}

 
