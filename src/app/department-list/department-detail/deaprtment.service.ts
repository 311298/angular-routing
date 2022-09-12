export class DepartmentService {
  name!: string[];

  setName(input: string[]): void {
    this.name = input;
    // console.log(this.name);
  }

  getName(): string[] {
    return this.name;
  }
}
