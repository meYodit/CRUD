import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Employee } from '../models/Employees';
import { IEmployee } from '../models/IEmployee';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {
constructor(public dataService: DataService){
}

employee:Employee = new Employee();

onView(){  
//this.employee = this.dataService.employees.findOne(this.dataService.selectedID);
 this.dataService.getOne(this.dataService.selectedID).subscribe({
    next:(data:any)=>{
     this.employee = data;
     console.log(data)
      },
    error:(err)=>{
     alert("Something is wrong! Please try again leter!")
    }
  })
}

noOrder(){
  return 0;
}
onClose(){
  this.dataService.displayModal = false;
} 

}
