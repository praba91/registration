import { Component, OnInit } from '@angular/core';
import {RegisterUserService} from '../../services/register-user.service';
//import {RegisterUser} from '../../models/register-user.model';
// import {MatInputModule} from 'angular-material';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { MatSliderModule,MatInputModule } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators,FormGroupDirective,NgForm } from '@angular/forms';
import { Observable }  from 'rxjs/Observable';
import {ErrorStateMatcher} from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
public registerUserTitle:any;
public forminfo:any;
  constructor(private registerTitle:RegisterUserService,private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit() {
  	this.getRegisterUserTitle();
  	this.getCountries();
  	this.getArrayReduce();
  	// reactive form create and set validator
  	this.createForm();
    this.setChangeValidate()
	// const countrySelect = 0;
	// this.formGroup.get('country').setValue(countrySelect);
  }
 getRegisterUserTitle()
 {
 	console.log(this.registerTitle.getRegisterUserTitle(),"title");
 	this.registerUserTitle=this.registerTitle.getRegisterUserTitle();
 	console.log(this.registerUserTitle.addressTitle,"title address");
 }
 getCountries()
 {
 	console.log(this.registerTitle.getCountry(),"get country details");
 }
 getArrayReduce()
 {
	const values = [3, 1, 3, 5, 2, 4, 4, 4];
	const uniqueValues = [new Set(values)];
	console.log(values,"values with duplicate");
	console.log(uniqueValues,"uniqueValues without duplicate");
	const users = [
	{ id: 11, name: 'Adam', age: 23, group: 'editor' },
	{ id: 47, name: 'John', age: 28, group: 'admin' },
	{ id: 85, name: 'William', age: 34, group: 'editor' },
	{ id: 97, name: 'Oliver', age: 28, group: 'admin' }
	];
      console.log(users,"users");
	let res = users.filter(it => it.name.includes('oli')); // it's not get exact reduce value
	 console.log(res,"res");
 }

 /* --- material----*/

 formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
firstNameError: string = '';

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
		'firstname': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
		'lastname': [null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
		'gender': [null, Validators.required],
		// 'dob': [null, [Validators.required]],
		'mobile': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
		'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
		'name': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
		// 'country': [null, [Validators.required]],
		// 'state': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
		// 'city': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
		'address': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
		'username': [null, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
		'password': [null, [Validators.required, Validators.minLength(8)]],
		// 'tempaddress': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
		// 'favoritecolor':[null,Validators.required],
		// 'website':[null,Validators.required],
		// 'telephone':[null,Validators.required],
		// 'validate': '',
		// 'agree':[null, [Validators.required]]
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }
  get mobile() {
    return this.formGroup.get('mobile') as FormControl
  }
  get state() {
    return this.formGroup.get('state') as FormControl
  }
  get city() {
    return this.formGroup.get('city') as FormControl
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }
  // checkUsername(control){
  //    let enteredUsername = control.value;
  //  //let UsernameCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  // let whitspaceCheck= /^([^' ']+)/;
  // console.log(!whitspaceCheck.test(enteredUsername),"whitspaceCheck.test(enteredUsername)");
  //  return (!whitspaceCheck.test(enteredUsername)) ? { 'usernameRequirements': true } : null;

  // }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }
 getErrorFirstName(){
 		return this.formGroup.get('firstname').hasError('required') ? 'First name is required' :
(!this.formGroup.get('firstname').hasError('minLength') || !this.formGroup.get('firstname').hasError('maxLength')) ? 'First name must between 3 to 20 checter allow ' : '';
 }
 getErrorLastName(){
 		return this.formGroup.get('lastname').hasError('required') ? 'Last name is required' :
(!this.formGroup.get('lastname').hasError('minLength') || !this.formGroup.get('lastname').hasError('maxLength')) ? 'Last name must between 1 to 20 checter allow ' : '';
 }
  getErrorFullName(){
 		return this.formGroup.get('name').hasError('required') ? 'Full name is required' :
(!this.formGroup.get('name').hasError('minLength') || !this.formGroup.get('name').hasError('maxLength')) ? 'Full name must between 3 to 20 checter allow ' : '';
 }

 getErrorGender(){
 		return this.formGroup.get('gender').hasError('required') ? 'Gender is required' : '';
 }
  getErrorDOB(){
 		return this.formGroup.get('dob').hasError('required') ? 'Date of birth is required' : '';
 }
  getErrorAgree(){
 		return this.formGroup.get('agree').hasError('required') ? 'Agree is required' : '';
 }
 getErrorMobile(){
 		return this.formGroup.get('mobile').hasError('required') ? 'Mobil no is required' :
(!this.formGroup.get('mobile').hasError('minLength') || !this.formGroup.get('mobile').hasError('maxLength')) ? 'Mobil no must between 10 to 12 cherecter allow ' : '';
 }
 getErrorCountry(){
 	//console.log(this.formGroup.get('country').hasError('required'),"country validator");
 		return this.formGroup.get('country').hasError('required') ? 'Country is required' :'';
 }
 getErrorState(){
 		return this.formGroup.get('state').hasError('required') ? 'State is required' :
(!this.formGroup.get('state').hasError('minLength') || !this.formGroup.get('state').hasError('maxLength')) ? 'State must between 3 to 30 checter allow ' : '';
 }
 getErrorCity(){
 		return this.formGroup.get('city').hasError('required') ? 'City is required' :
(!this.formGroup.get('city').hasError('minLength') || !this.formGroup.get('city').hasError('maxLength')) ? 'City must between 3 to 30 checter allow ' : '';
 }
 getErrorColor(){
 		return this.formGroup.get('favoritecolor').hasError('required') ? 'Favorite color is required' : '';
 }
 getErrorTelephone(){
 		return this.formGroup.get('telephone').hasError('required') ? 'Telephone is required' :
(!this.formGroup.get('telephone').hasError('minLength') || !this.formGroup.get('telephone').hasError('maxLength')) ? 'Telephone must between 10 to 12 checter allow ' : '';
 }
 getErrorWebsite(){
 		return this.formGroup.get('website').hasError('required') ? 'Website is required' :
(!this.formGroup.get('website').hasError('minLength') || !this.formGroup.get('website').hasError('maxLength')) ? 'Website must between 5 to 100 checter allow ' : '';
 }
  getErrorEmail() {
return this.formGroup.get('email').hasError('required') ? 'Field is required' :
this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }
  getErrorAddress() {
return this.formGroup.get('address').hasError('required') ? 'Address is required ' :
(!this.formGroup.get('address').hasError('minLength') || !this.formGroup.get('address').hasError('maxLength')) ? 'Address must between 3 to 500 checter allow ' : '';
  }
   getErrorTempAddress() {
return this.formGroup.get('tempaddress').hasError('required') ? 'Temporary address is required ' :
(!this.formGroup.get('tempaddress').hasError('minLength') || !this.formGroup.get('tempaddress').hasError('maxLength')) ? 'Temporary address must between 3 to 500 checter allow ' : '';
  }

  getErrorPassword() {
return this.formGroup.get('password').hasError('required') ? 'Password is required (at least eight characters, one uppercase letter and one number)' :
this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }
  getErrorUsername() {
return this.formGroup.get('username').hasError('required') ? 'Username is required ' :
(!this.formGroup.get('username').hasError('minLength') || !this.formGroup.get('username').hasError('maxLength')) ? 'Username must between 5 to 25 checter allow ' : '';
  }
matcher:any;
  onSubmit() {
  	this.formGroup.get('username').markAsUntouched();
  	
    console.log(this.formGroup.value,"value")
    console.log(this.formGroup.invalid,"this.formGroup.invalid");
	if (this.formGroup.invalid) {
	this.matcher = new MyErrorStateMatcher();
	console.log( this.matcher," this.matcher");
	return;
	} else{
let data = JSON.parse(JSON.stringify(this.formGroup.value));
    console.log(this.formGroup.value,"value")
     this.http.post('http://localhost/Paul/Angular-meterial/salesBackV2/register.php', data).subscribe((res: any) => {
    console.log(res,"res")
      if (res.status)  {
     console.log("Register successfully");

    } else {
     
    }


  }, err => console.log('error', err));
  }
  }
 
 


}
