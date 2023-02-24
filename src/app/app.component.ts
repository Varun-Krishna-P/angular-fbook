import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './interfaces/user';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fbook';
  private currentUser = {};
  loggedIn: boolean = false;
  logOutMessage =  ""

  constructor(private _storageService: StorageService, private _authService: AuthService, private router: Router){}
  ngOnInit() {
    this.currentUser = JSON.parse(this._storageService.getSessionCurrentUser() || "{}");
    if(this.currentUser){
      this.loggedIn = true;
    }
  }

  logOut() {
    this._authService.signOut();
    this.logOutMessage = "Logged Out successfully!";
    this.loggedIn = false;
    this.router.navigate(['']);
  }
}
