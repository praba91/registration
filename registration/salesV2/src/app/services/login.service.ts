import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../models/login.model';
import {map} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(   private firestore: AngularFirestore   ) {}
  getLoginTitle (){
  	var a=new Login;
    return a.loginTitle;
  }

//   createCoffeeOrder(data) {
//     return new Promise<any>((resolve, reject) =>{
//         this.firestore
//             .collection("users")
//             .add(data)
//             .then(res => { console.log(res,"res service");}, err => reject(err));
//     });
// }
  
}
