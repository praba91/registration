import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../component/authentication/login/login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login-routing.module';
import { FormsModule }   from '@angular/forms';
import { MatSliderModule,MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
  RouterModule.forChild(LoginRoutes),
    CommonModule,
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatRadioModule, 
    MatCardModule, 
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
  ]
})
export class LoginModule { }
