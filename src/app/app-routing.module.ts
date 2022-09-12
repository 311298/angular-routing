import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './department-list/department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', component: DepartmentListComponent },
  { path: '', redirectTo: '/department', pathMatch: 'full' },
  // pathMacth has 2 value 'prefix' -> which add the /department to anything and 'full' path is exactly same
  {
    path: 'department',
    component: DepartmentListComponent,
  },
  { path: 'department/:id/:name', component: DepartmentDetailComponent },
  // what does thing path means if we write link manually and localhost:4200/department -> it will lead to DepartmentListComponent and same goes for EmployeeListComponent
  { path: 'employee', component: EmployeeListComponent },
  // each JS object coresponds to component and its path
  { path: '**', component: PageNotFoundComponent },
  //for page not found, and should always be last in JS object
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
];
// in order to avoid the same imports inside the app.module and app-routing.module we will create a new variable and export it app.module
// any time we add new component we only need to add it inside the app-routing.module.ts file not in app.module.ts file
