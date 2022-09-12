import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentService } from './department-list/department-detail/deaprtment.service';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DepartmentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
