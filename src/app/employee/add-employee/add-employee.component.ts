import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';
import {Employee} from '../../model/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee = new Employee();

  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.apiService.createEmployee(this.employee)
      .subscribe(data => {
        this.router.navigate(['list-employee']);
      });
  }

  cancel() {
    this.apiService.getEmployees()
      .subscribe(data => {
        this.router.navigate(['list-employee']);
      });
  }
}
