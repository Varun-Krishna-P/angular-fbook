import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  submitted: boolean = false;
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })
  constructor(private _userService: UserService){}

  public get f() {return this.forgotPasswordForm.controls}

  resetPassword() {
    this.submitted = true;
    let userId = 0
    const email = this.forgotPasswordForm.value.email
    if(email){
      this._userService.findUserByEmail(email).subscribe( data => {
        userId = data['_id']
      });
    }

  }
}
