import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { LoginComponent } from './component/authentication/login/login.component';
import {   AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import {   RoleGuardService as RoleGuard } from './services/auth/role-guard.service';
import { HomeComponent } from './component/layout/home/home.component';
import { ParantComponent } from './component/parant/parant.component';
const routes: Routes = [
{ path: '',loadChildren: './module/login/login.module#LoginModule'},
{ path: 'login',loadChildren: './module/login/login.module#LoginModule'},
{ path: 'home',loadChildren: './module/layout/home/home.module#HomeModule'},
{ path: 'parant',component:ParantComponent},
{ path: 'register',component:RegisterUserComponent},

{ path: 'register',component: RegisterUserComponent,canActivate: [AuthGuard,RoleGuard],data: { 
      expectedRole: 'admin'
    }  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
