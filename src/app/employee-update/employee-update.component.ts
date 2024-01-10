import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../models/IEmployee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.css'
})
export class EmployeeUpdateComponent {
  myForm!:FormGroup;
  constructor(private dataService:DataService,
    private router:Router,
    private activateRoute:ActivatedRoute){

  }
  ngOnInit(){
    let id=this.activateRoute.snapshot.params['id'];
    let employee:IEmployee | null =this.dataService.employees.findOne(id) 
    //let employee:IEmployee = this.dataService.getOne(id)
   //console.log(employee);
    if(employee)  
      this.myForm = new FormGroup({
        'id':new FormControl(employee.id),
        'firstName':new FormControl(employee.firstName, [Validators.required, Validators.minLength(4)]),
        'lastName':new FormControl(employee.lastName, [Validators.required, Validators.maxLength(5)]),
        'salary':new FormControl(employee.salary, Validators.required)
     } )
    }
   
    onSubmit(){
      
      this.dataService.putOne(this.myForm.value.id, this.myForm.value).subscribe({
       next:(data:any)=>{
        this.dataService.employees.update(data);       
        this.router.navigate(["/employees"]);       
       },
       error:(err) => alert("Something is wrong. Please try again!") 
      })
    } 
  
  }
   

