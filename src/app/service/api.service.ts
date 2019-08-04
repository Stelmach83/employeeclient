import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiResponse} from '../model/api.response';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../model/employee.model';

@Injectable()
export class ApiService {

  private baseUrl = 'http://77.55.233.217:8080/homeworkapi/api/v2/employees/';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createEmployee(employee: Employee): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }

}
