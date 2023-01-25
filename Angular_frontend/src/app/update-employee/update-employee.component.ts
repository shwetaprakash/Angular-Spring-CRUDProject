import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!: number;
  employee: Employee =new Employee();
 
  constructor(private employeeService:EmployeeService,
    private route: ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    
//Angular Router provides methods to get route parameters:Using the route snapshot
//retrieve the value of the parameter using the route snapshot.
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=> {
       
       this.employee = data;
     },
     error =>console.log(error));
    }
     
    onSubmit()
    {
      this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
        this.gotoEmployeeList();
      },
      error =>console.log(error));
    }
 
    gotoEmployeeList()
    {
    this.router.navigate(['/employees']);
    }


}
