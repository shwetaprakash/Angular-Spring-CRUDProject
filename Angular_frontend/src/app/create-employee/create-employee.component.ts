import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //OnInit -A lifecycle hook that is called after Angular has initialized all 
  // data-bound properties of a directive.Define an ngOnInit() method to handle 
  //any additional initialization tasks

  employee: Employee = new Employee();
  constructor(private employeeService:EmployeeService,
    private router: Router){}

  ngOnInit(): void {
    
  }
  saveEmployee()
  {
    this.employeeService.createEmployee(this.employee).subscribe(data=>
      {
        console.log(data);
        this.gotoEmployeeList();
      },
      error => console.log(error));
    
  }
  gotoEmployeeList()
  {
    this.router.navigate(['/employees']);
  }
  onSubmit()
  {
    console.log(this.employee);
    this.saveEmployee();
  }

}
