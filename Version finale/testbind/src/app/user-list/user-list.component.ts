import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../Model/User.Model";
import {Subscription} from "rxjs";
import {userServices} from "../Services/user.Services";
import {adminServices} from "../Services/admin.Services";
import {Admin} from "../Model/Admin.Model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  public users: User[] = [];

  public userSubscription: Subscription = new Subscription;

  constructor(
    private userService: userServices,
    private adminService: adminServices
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.getUserFromServer();
    this.userService.emitUsers();
  }



  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  deleteUser(id:number){
    this.userService.onDeleteUser(id);
  }

  promotionUser(id:number){
    const i = 0;
    let test = false;
    var userpromote:User = this.users[i];
    while (test == false){
      if (this.users[i].id_user == id){
        userpromote = this.users[i];
        test = true;
      }
    }
    var newamdin:Admin = new Admin(0,userpromote.email,userpromote.full_name,userpromote.password, userpromote.telephone)
    this.adminService.saveAdminToServer(newamdin);
    this.userService.onDeleteUser(userpromote.id_user);

  }

}
