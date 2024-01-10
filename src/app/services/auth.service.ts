import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
_url = "http://localhost:3000/"
  constructor(private http:HttpClient,
              private router:Router,
              private dataService:DataService) { }

  login(creds:any){
    return this.http.post(this._url + "login", creds);    
  }
  logout(){
    localStorage.clear();
    this.dataService.employees.data = [];
    this.router.navigate(['/home']);
  }
   isLoggedIn(){
    let token =localStorage.getItem('token');    
    return token? true :false;
   }   
   isAdmin(){
    let role =localStorage.getItem('role'); 
    if(!role) return false;
    if(role =='admin')return true;
    return false;
   }
}
