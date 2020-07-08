
import {Country} from "./country.model";
import {Deserializable} from "./deserializable.model";
export class RegisterUser implements Deserializable{
	public firstNameTitle:string = 'First Name';
	public lastNameTitle:string = 'Last Name';
	public fullNameTitle:string = 'Full Name';
	public dobTitle:string = 'Date of birth';
	public userNameTitle:string = 'User Name';
	public passwordTitle:string = 'Password';
	public genderTitle:string = 'Gender';
	public mobileTitle:string = 'Mobile No';
	public emailTitle:string = 'Email id';
	public countryTitle:string = 'Country';
	public stateTitle:string = 'State';
	public cityTitle:string = 'City';
	public pincodeTitle:string = 'Pincode';
	public addressTitle:string = 'Permanent Address';
	public tempAddressTitle:string = 'Temporary Address';
	public favoriteColorTitle:string = 'Favorite colors';
	public websiteTitle:string = 'Website';
	public telephoneTitle:string = 'Telephone no';
	public title:any={
	firstNameTitle:this.firstNameTitle,
	lastNameTitle:this.lastNameTitle,
	fullNameTitle:this.fullNameTitle,
	userNameTitle:this.userNameTitle,
	passwordTitle:this.passwordTitle,
	genderTitle:this.genderTitle,
	mobileTitle:this.mobileTitle,
	emailTitle:this.emailTitle,
	countryTitle:this.countryTitle,
	stateTitle:this.stateTitle,
	cityTitle:this.cityTitle,
	pincodeTitle:this.pincodeTitle,
	addressTitle:this.addressTitle,
	tempAddressTitle:this.tempAddressTitle,
	dobTitle:this.dobTitle,
	favoriteColorTitle:this.favoriteColorTitle,
	websiteTitle:this.websiteTitle,
	telephoneTitle:this.telephoneTitle
	};
	public country:Country;
	
	deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
