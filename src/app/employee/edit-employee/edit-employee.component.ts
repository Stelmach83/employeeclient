import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee.model';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private router: Router, private apiService: ApiService) {
    const employeeId = window.localStorage.getItem("editEmployeeId");
    if (!employeeId) {
      alert("Invalid action.")
      this.router.navigate(['list-employee']);
      return;
    }
    this.apiService.getEmployeeById(+employeeId)
      .subscribe(data => {
        this.employee = data.result;
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.apiService.updateEmployee(this.employee)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            this.router.navigate(['list-employee']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

  cancel() {
    this.apiService.getEmployees()
      .subscribe(data => {
        this.router.navigate(['list-employee']);
      });
  }

}
