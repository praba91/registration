import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule,MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
//import { AddressFieldComponent } from './address-field/address-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './module/material/material.module';
//import { LoginComponent } from './component/authentication/login/login.component';
import { LoginModule } from './module/login/login.module';
import { HomeModule } from './module/layout/home/home.module';
import { HomeComponent } from './component/layout/home/home.component';
// import { HeaderComponent } from './component/layout/header/header.component';
// import { FooterComponent } from './component/layout/footer/footer.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ParantComponent } from './component/parant/parant.component';
import { ChildComponent } from './component/child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    ParantComponent,
    ChildComponent,
   // HomeComponent,
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, 
    BrowserAnimationsModule,MaterialModule,
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatRadioModule, 
    MatCardModule, 
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
     LoginModule,HomeModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
