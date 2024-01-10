import { ActivatedRouteSnapshot, CanActivateChild, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivateChild{
  constructor(public authService:AuthService){}

canActivateChild(
childRoute:ActivatedRouteSnapshot,
state:RouterStateSnapshot){
  if( this.authService.isAdmin()){
    return true;
  }
  alert("You are not admin!")
  return false;
}
}