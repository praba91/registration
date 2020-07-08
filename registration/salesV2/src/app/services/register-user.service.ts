import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterUser} from '../models/register-user.model';
import {map} from 'rxjs/operators';
import {Country} from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private httpService: HttpClient) { }
  getRegisterUserTitle()
  {
  	var a=new RegisterUser;
    return a.title;
  }
  getCountry(): Observable<Country[]>
  {
  	return this.httpService.get<Country[]>(`http://localhost/Paul/Angular-meterial/salesBackV2/getCountry.php`).pipe(
      map(data => data.map(data => new Country().deserialize(data)))
    );
  }
//   getUser(): Observable<RegisterUser[]> {
//   return this.httpService.get('/api/user')
//     .map((res: Response) => res.json().map((RegisterUser: RegisterUser) => new RegisterUser().deserialize(RegisterUser)));
// }
}
