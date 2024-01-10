import { Component, ViewChild } from '@angular/core';
import { Employee } from './models/Employees';
import { IEmployee } from './models/IEmployee';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD';
  //  employee:IEmployee[]=[];
   //display:boolean=false;
   theme:number=2;
  // appRootString:string =lloasd fasdfdas from app-root!";
  // childData:string ="dsfasdfasdf asdfasdf";

  //dicorater @Viewchild() start from parent
 //@ViewChild(EmployeeListComponent) childComponent!:EmployeeListComponent
 constructor(public dataService:DataService, public authService:AuthService){ 

 }
  //  employees:Employee = new Employee();

  //  ngOnInit(){
  //     const app= this.dataService.getAll();
  //     app.subscribe((data:any)=>{
  //       this.employees = this.dataService.employees.data = data
  //       //console.log(data)
  //     },(err)=>{
  //       console.log(err)
  //     })
  //  }

  //  ngOnInit(){
  //   //2.send the data
  //   const send = this.dataService.getAll();

  //   //3. listen to the data from the back-end
  //   //two method
  //   send.subscribe(
  //     (data:any)=>{
  //        this.employees = this.dataService.employees.data=data
  //       console.log(this.employees)
  //     },
  //     (err)=>{
  //       console.log(err)
  //     }
  //   )
    
  // }
  onDisplay(){
   //this.display =!this.display;
  }
  // findall(){
  //   console.log(this.employees.findAll());
  // }
  // onView(id:number){
  //   let employee = this.employees.findOne(id)
  //   alert(`
  //   ID: ${employee?.id}
  //   First: Name: ${employee?.firstName}
  //   Last Nmame: ${employee?.lastName}
  //   Salary: ${employee?.salary}
  //   `)
  // }

  // create(){
  //   this.employees.insert({
  //     id:this.employees.data.length,
  //     firstName:"AAA",
  //     lastName:"AAA",
  //     salary:500
  //   })
  // }

  // onUpdate(employee:IEmployee){
  //   this.employees.update({
  //     id: employee.id,
  //     firstName: employee.firstName,
  //     lastName: employee.lastName,     
  //     salary:Math.floor(Math.random()*100)*1000
  //   })
  // }

  // reciveFromChild(event:string){
  //   this.childData = event
  // }
//revoc from the childe
// good for loosely cupling 


  // myChildData!:string;
  //  displayChildInformation(){
  //  this.childComponent.randamNumber()
  //   alert(`
  //   ${this.childComponent.data},
  //   ${this.childComponent.message},
  //   ${this.childComponent.hello},`
  //   )

  //   this.myChildData = `${this.childComponent.data},
  //   ${this.childComponent.message},
  //   ${this.childComponent.hello},`  
    
  //  } 

  //note component communication
  //>> parent to child
  // -@Input()
  //>>child to parent
  //-@Output() start from child
  //-@Viewchild() start from parent


  //Frontend method
  // - localstorage
  // - service()
}
