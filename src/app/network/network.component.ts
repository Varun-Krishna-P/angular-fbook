import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  users: any = []
  constructor(private _userService: UserService){}

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(data => this.users = data)
  }

}
