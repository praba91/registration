import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../../component/layout/home/home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home-routing.module';
import { FormsModule }   from '@angular/forms';
import { MatSliderModule,MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule,MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from '../../../component/layout/header/header.component';
import { FooterComponent } from '../../../component/layout/footer/footer.component';

@NgModule({
  declarations: [HomeComponent,HeaderComponent,
    FooterComponent],
   exports: [HomeComponent],
  imports: [
   RouterModule.forChild(HomeRoutes),
    CommonModule,
    CommonModule,
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatRadioModule, 
    MatCardModule, 
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,MatToolbarModule
  ]
})
export class HomeModule { }
