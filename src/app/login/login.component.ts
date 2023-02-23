import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // definite assignment assertion operator
  user!: User;
  submitted = false;
  errorResponse = false;
  errorMessage = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService){}

  get f() { return this.loginForm.controls}

  login() {
    this.submitted = true
    // Non-null assertion operator !
    //asdf@gmail.com/asdf123
    const email: string =  this.loginForm.value.email!;
    const password: string =  this.loginForm.value.password!;
    this.authService.authenticate(email, password).subscribe({ 
      next: (data: any) => {
        this.user = {
          isAdmin: data.isAdmin,
          isActive: data.isActive,
          "_id": data["_id"],
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          dob: data.dob,
          gender: data.gender,
          photoId: data.photoId,
          createdDate: data.createdDate,
          "_v": data["_v"],
          token: data.token
        }
        console.log(this.user)
      }, error: err => {
        this.errorResponse = true;
        this.errorMessage = err.error.message;
      }
      })
  }

}
