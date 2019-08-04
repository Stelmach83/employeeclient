import {RouterModule, Routes} from '@angular/router';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {EditEmployeeComponent} from './employee/edit-employee/edit-employee.component';
import {AddEmployeeComponent} from './employee/add-employee/add-employee.component';

const routes: Routes = [
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'list-employee', component: ListEmployeeComponent},
  {path: 'edit-employee', component: EditEmployeeComponent},
  {path: '', component: ListEmployeeComponent}
];

export const routing = RouterModule.forRoot(routes);
