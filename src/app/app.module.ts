import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {AddEmployeeComponent} from './employee/add-employee/add-employee.component';
import {EditEmployeeComponent} from './employee/edit-employee/edit-employee.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './core/interceptor';
import {ApiService} from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
