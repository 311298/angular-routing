import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DepartmentService } from './deaprtment.service';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>department-detail works!</p>
    <div>
      <p>Id selected is {{ id + 1 }}</p>
      <p>name selected is {{ name }}</p>
    </div>
    <div>
      <button (click)="goDepartmentList()">previous</button>
    </div>
    <div>
      <button (click)="goNext()">go next line item</button>
      <button (click)="goPrev()">go prev line item</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dr: DepartmentService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'] + 1;
    this.name = this.route.snapshot.params['name'];
    this.route.params.subscribe((pr: Params) => {
      this.id = +this.route.snapshot.params['id'];
      this.name = this.route.snapshot.params['name'];
    });
  }

  id!: number;
  name!: string;
  name1!: string;

  goDepartmentList(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
    //here we need to add the ../../ as we going back to 2 parameters id and name
  }

  goNext() {
    // console.log(this.dr.getName());
    this.name1 = this.dr.getName()[this.id + 1];
    this.router.navigate(['/department', this.id + 1, this.name1], {
      relativeTo: this.route,
    });

    // only thing is left is to do error handling as after 5th there is no row
  }

  goPrev() {
    this.name1 = this.dr.getName()[this.id - 1];
    this.router.navigate(['/department', this.id - 1, this.name1], {
      relativeTo: this.route,
    });

    // only thing left is to do the error handling as before 1th there is no row
  }
}
