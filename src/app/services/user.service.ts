import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const APIURL = "http://3.17.216.66:3000/users/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _http: HttpClient) { }

  findUserByEmail(email: string): Observable<any> {
    return this._http.post(`${APIURL}finduserbyemail`, {
      email: email
    }, httpOptions)

  }

  updateUser(id: string, user: any): Observable<any> {
    return this._http.put(`${APIURL}${id}`, {
      user
    }, httpOptions)
  }
}
