import {Injectable} from "@angular/core";
import {User} from "../Model/User.Model";
import {Subscription} from "rxjs";
import {userServices} from "./user.Services";
import {adminServices} from "./admin.Services";

@Injectable({ providedIn: 'root' })
export class authenticationService {
  public users: User[] = [];

  public userSubscription: Subscription = new Subscription;
  public loggedUser: string | undefined ;
  public isloggedIn: Boolean = false;

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

  SignIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if(user.full_name=== curUser.full_name && user.password==curUser.password) {
        validUser = true;
        this.loggedUser = <string>curUser.full_name;
        this.isloggedIn = true;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
    });

    return validUser;
  }

  exist(pseudo : String, password : String){
    let p:boolean = false;
    let n:boolean = false;
    for (let i=0;i<this.users.length;i++){
      if (pseudo==this.users[i].full_name){
        n=true;
      }
      if (password==this.users[i].password){
        p=true;
      }
    }
    if (p==true&&n==true){
      return 1;
    }
    else {
      return 0;
    }
  }

  isUser(name:String, password:String):boolean{
    if (this.exist(name, password)==1){
      return true;
    }
    else {return false;}
  }
}
