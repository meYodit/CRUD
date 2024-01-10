import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { IEmployee } from '../models/IEmployee';
import { Employee } from '../models/Employees';
import { NgForm, NgModel } from '@angular/forms';
import { EmployeeNewComponent } from '../employee-new/employee-new.component';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  @ViewChild(EmployeeDetailComponent)detailComponent!:EmployeeDetailComponent
  // @ViewChild(EmployeeNewComponent) employeeNewcomponent!:EmployeeNewComponent
  display:boolean = false;
  constructor(public dataService:DataService){      
  }

employees:Employee = new Employee();

  ngOnInit(){  
    this.dataService.getAll().subscribe({
      next:(data:any)=>{
        this.dataService.employees.data=data
    },
      error:(err)=>{
        console.log(err)
      }
    },
    )
  }

onView(id:number){
  this.dataService.selectedID = id;
  this.dataService.displayModal = true;
 this.detailComponent.onView();
}

onDisplay(){
  this.display = true;
}

  


  //  create(){  
  //   this.dataService.postOne({
  //     firstName:"AAA",
  //      lastName:"AAA",
  //     salary:500
  //   }).subscribe({
  //     next:(data:any)=>{
  //       this.dataService.employees.insert(data)
  //       //console.log(data)
  //     },
  //     error:(error)=>{alert("something is wrong.please try again later!")}
  //   })
  // }

  onDelete(id:number){
    let agree= confirm("Are you sure you want to delete?");
    if(agree){
      this.dataService.deleteOne(id).subscribe({
        next:(data)=>{
      alert("you have successfully deleted!")
       this.dataService.employees.delete(id)
      },
        error:(err)=>{alert("something is wrong.please try again later!")}
      })
     
    }
  }  
  // onView(id:number){
  //   this.dataService.selectedID=id;
  //   let employee=this.dataService.employees.findOne(this.dataService.selectedID);
  //     alert(`
  //       ID:${this.dataService.selectedID =id}
  //       First Name :${employee?.firstName}
  //       Last Name :${employee?.lastName}
  //       Salary :${employee?.salary}
       
  //     `)
  //   }

}
