import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { MatSliderModule,MatInputModule } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators,FormGroupDirective,NgForm } from '@angular/forms';
import { Observable }  from 'rxjs/Observable';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public title:any;
public matcher:any;
public usernameErrorMessage:any = '';
public passwordErrorMessage:any = '';
password:any = '';
username:any = '';
  constructor( private db: AngularFirestore,public logintitle:LoginService,public route:Router,private http: HttpClient) { }

  ngOnInit() {
  	this.title=this.logintitle.getLoginTitle();
  	console.log(this.title,"this.title"); 
  }
   getErrorPassword(form) {
   	console.log(form.value);
return (form.controls.password.invalid || form.controls.password.trim()=='') ? 'Password is required' : '';
  }
  getErrorUsername(form) {
  		console.log(form);
return (form.controls.username.invalid ||  form.controls.username.trim()=='') ? 'Username is required ' : '';
  }
Submit(form){
if (form.invalid) {
this.matcher = new MyErrorStateMatcher();
this.usernameErrorMessage=this.getErrorUsername(form);
this.passwordErrorMessage=this.getErrorPassword(form);
return;
} else{
this.usernameErrorMessage='';
this.passwordErrorMessage='';
let data = JSON.parse(JSON.stringify(form.value));
console.log(data,"data");
this.http
     .post('http://localhost/Paul/Angular-meterial/salesBackV2/login.php',data)
     .subscribe((res: any) => {
         console.log(res,"res")
     }, err => console.log('error', err));
console.log(form.value,"value")

//this.route.navigate(['home']);

}
}
// public users:any = {
//   'name':"Paul",'username':'paul123','password':'paul444'
// }

public datass:any;
registerPage(){
 this.route.navigate(['register']);
}
// /*Add data to the firebase*/
// onSubmit() {
//   let data =  this.users;
//   this.db.collection('users').add({
//     name: 'robo',
//     username: 'paul444',
//     password: 'robo554'   
//   }); 
// }
// public allData:any;
// /* get all data query firebase*/
// getAllQuery() {
//     return this.db.collection('users').snapshotChanges();
// }
// /* get all data firebase*/
//   getAllData(){
//     /* get all data from firebase database */
//     this.getAllQuery().subscribe(data => {
//       this.allData = data;
//            this.datass = data.map(e => {
//         return e.payload.doc.data()
//       }); 
     
//     });
//   }
// /* search value by user firebase query */
// searchUsers(searchValue){
//   return this.db.collection('users',ref => ref.where('name', '==', searchValue))
//   .snapshotChanges()
// }
// public searchValue:any="robo";
// public nameData:any;
// /* search value by user firebase  */
// searchByName(){
//   let value = this.searchValue.toLowerCase();
//   this.searchUsers(value)
//   .subscribe(result => {
//     console.log(result,"result");
//     this.nameData = result.map(e => {
//       console.log(e.payload.doc.id,"id");
//       return e.payload.doc.data()

//     }); 
//     console.log(this.nameData,"nameData");

//   })
// }
// /* update firebase query */
// updateUser(userKey){
//  // value.nameToSearch = value.name.toLowerCase();
//   return this.db.collection('users').doc(userKey).update(
//     {
//         name: "Anbu Selvan",
//         password: "anbu.selvan@email.com",
//     },
// );
// }
// /*update data*/

// update(id){
//  let res = this.updateUser(id);
//  console.log(res,"res");
//  this.getAllData();
// }

// /* delete user query */

// deleteUser(userKey){
//   this.db.collection("users")
//   .doc(userKey)
//   .delete()
//   .then(function () { 
//     console.log("Document successfully deleted!"); 
//   }).catch(
//   function(error) { 
//     console.error("Error removing document: ", error); 
//   });

// }
// /* delete data*/
// delete(id){
//   this.deleteUser(id);
//    this.getAllData();
// }
}
