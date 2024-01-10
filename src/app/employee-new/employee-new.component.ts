import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrl: './employee-new.component.css'
})
export class EmployeeNewComponent {
  constructor(private dataService:DataService,
    private router:Router){}
 
  onSubmit(f:NgForm){
    //console.log(f.value);
    this.dataService.postOne(f.value).subscribe({
      next:(data:any)=>{
        this.dataService.employees.insert(data)
        f.reset();
        this.router.navigate(["/employees"])
      },
      error:(error)=>{alert("something is wrong.please try again later!")}
    })
  }   
}
