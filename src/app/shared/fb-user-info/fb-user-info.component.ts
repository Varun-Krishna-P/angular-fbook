import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fb-user-info',
  templateUrl: './fb-user-info.component.html',
  styleUrls: ['./fb-user-info.component.css']
})
export class FbUserInfoComponent implements OnInit {
  imageBlobUrl: any = ""
  constructor(private _userService: UserService, private _storageService: StorageService) {}

  ngOnInit(): void {
    this.userPhoto()
  }
  userPhoto(): void {
    let currentUser = JSON.parse(this._storageService.getSessionCurrentUser() || '{}')
    if(currentUser && Object.keys(currentUser).length > 0){
      this._userService.getUserPhoto(currentUser.photoId).subscribe(data => {
        this.createImageFromBlob(data)
      })
    }
    
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageBlobUrl = reader.result;
    }, false);
  if (image) {
      reader.readAsDataURL(image);
      console.log("hhhh")
    }
  }

}