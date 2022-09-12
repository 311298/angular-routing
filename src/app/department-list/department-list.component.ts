import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from './department-detail/deaprtment.service';

@Component({
  selector: 'app-department-list',
  template: `
    <p>department-list works!</p>
    <div *ngFor="let x of departments; let i = index">
      <p (click)="onSelect(i, x)">
        <span> {{ i + 1 }} : {{ x }}</span>
      </p>
    </div>
  `,
  styles: [],
})
export class DepartmentListComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dr: DepartmentService
  ) {}

  ngOnInit(): void {}

  departments: string[] = ['Angular', 'node', 'mongodb', 'ruby', 'bootstrap'];

  onSelect(i: number, x: string): void {
    this.router.navigate([i, x], { relativeTo: this.route });
    // here we are using the relative navigation as we need not to mention '/department'
    this.dr.setName(this.departments);
  }
}
