import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
