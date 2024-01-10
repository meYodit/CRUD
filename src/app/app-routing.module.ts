import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { loginGuard } from './gaurds/login.guard';
import { adminGuard } from './gaurds/admin.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path: 'employees',component:EmployeeListComponent, canActivate:[loginGuard], canActivateChild:[adminGuard],
children:[
  {  path:'new',component:EmployeeNewComponent , canActivate:[loginGuard]},
  {  path:'update/:id',component:EmployeeUpdateComponent , canActivate:[loginGuard]}
] },
 {path:'about',loadChildren: ()=> import('./lazy/lazy.module').then(m=> m.LazyModule)},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
