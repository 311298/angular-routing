import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: 'department', component: DepartmentListComponent },
  // what does thing path means if we write link manually and localhost:4200/department -> it will lead to DepartmentListComponent and same goes for EmployeeListComponent
  { path: 'employee', component: EmployeeListComponent },
  // each JS object coresponds to component and its path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
];
// in order to avoid the same imports inside the app.module and app-routing.module we will create a new variable and export it app.module
// any time we add new component we only need to add it inside the app-routing.module.ts file not in app.module.ts file
