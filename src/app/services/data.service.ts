import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/Employees';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   selectedID!:number;
   displayModal:boolean = false;  
  employees:Employee= new Employee();
  constructor(public http:HttpClient) { }
  //1.setup
  getAll(){
     return this.http.get("http://localhost:3000/employees");
    
  }
  getOne(id:number){
    return this.http.get("http://localhost:3000/employees/" + id);
  }  
 postOne(body:any){
    return this.http.post("http://localhost:3000/employees/",body);
  }
  deleteOne(id:number){
    return this.http.delete("http://localhost:3000/employees/" + id);
  }
  putOne(id:number,body:any){
    return this.http.put("http://localhost:3000/employees/" + id,body )
  }
}
