import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
//this is typescript class with Injectable decorator
export class EmployeeService {

  private baseURL= "http://localhost:8080/api/v1/employees";

  //injected HttpClient in constructor
  constructor(private httpClient: HttpClient) { }
  
  //Angular makes use of observables as an interface to handle 
  //a variety of common asynchronous operations like The HTTP module uses observables to handle AJAX requests and responses
  getEmployeeList() : Observable<Employee[]>
  {
    // get method request that interprets the body as JSON and returns the 
    //response body in a given type , here it is Employee list
    //get method return — An Observable of the HttpResponse, with a response body in the requested type.
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }
  createEmployee(employee:Employee):Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(id :number) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }
  updateEmployee(id: number,employee : Employee) : Observable <Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployee(id: number) : Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
