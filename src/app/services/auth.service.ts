import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, last, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const BASEURL = "http://3.17.216.66:3000/users/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) { }

 

  authenticate(email: string, password: string): Observable<any> {
    return this._http.post<any>(BASEURL + "authenticate", {
      email: email,
      password: password
    }, httpOptions)
  }
  register(firstName: string, lastName: string, email: string, dob: string, gender: string, password: string): Observable<any> {
    return this._http.post(BASEURL + "register",{
      firstName: firstName,
      lastName: lastName,
      email: email,
      dob: dob,
      gender: gender,
      password: password
    }, httpOptions)
  }
}
