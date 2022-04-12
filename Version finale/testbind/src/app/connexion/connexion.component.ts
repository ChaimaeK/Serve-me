import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {User} from "../Model/User.Model";
import {Admin} from "../Model/Admin.Model";
import {userServices} from "../Services/user.Services";
import {authenticationService} from "../Services/auth.Services";
import {adminServices} from "../Services/admin.Services";
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public users: User[] = [];
  public userSubscription: Subscription = new Subscription;
  public erreur=0;
  public admins: Admin[] = [];
  public adminSubscription: Subscription = new Subscription;

  public logeduser!:boolean;
  public logedadmin!:boolean;
  public a:number = -1;

  constructor( private  userService:userServices, private authServices: authenticationService, private adminService: adminServices, private router:Router ) { }

  ngOnInit(): void {
    localStorage.setItem('new' , 'false');
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.getUserFromServer();
    this.userService.emitUsers();

    this.adminSubscription = this.adminService.userSubject.subscribe(
      (admins: Admin[]) => {
        this.admins = admins;
      }
    );
    this.adminService.getAdminFromServer();
    this.adminService.emitAdmin();
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const password = form.value['password'];
    if (this.exist(name,password) == 1){
      this.logeduser=true;
      this.logedadmin=false;
      localStorage.setItem('loguser', String(this.logeduser));
      localStorage.setItem('logadmin', String(this.logedadmin));
      localStorage.setItem('name',name);
      localStorage.setItem('password', password);
      this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
    }
    else if (this.exist(name,password) == 2){
      this.logeduser=false;
      this.logedadmin=true;
      localStorage.setItem('loguser', String(this.logeduser));
      localStorage.setItem('logadmin', String(this.logedadmin));
      localStorage.setItem('name',name);
      localStorage.setItem('password', password);
      this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
    }
    else{
      this.logeduser=false;
      this.logedadmin=false;
      localStorage.setItem('loguser',String(this.logeduser));
      localStorage.setItem('logadmin', String(this.logedadmin));
      localStorage.setItem('name', name);
      localStorage.setItem('password', password);
      this.erreur=1;
    }


  }

  test(){
    return this.exist("T O", "R");
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  exist(pseudo : string, password : string){
    let pu:boolean = false;
    let nu:boolean = false;
    let pa:boolean = false;
    let na:boolean = false;
    for (let i=0;i<this.users.length;i++){
      if (pseudo==this.users[i].full_name && password==this.users[i].password){
        nu=true;
        pu=true;
        localStorage.setItem('idUser', String(i + 1));
      }

    }
    for (let i=0;i<this.admins.length;i++){
      if (pseudo==this.admins[i].full_name && password==this.admins[i].password){
        na=true;
        pa=true;
        localStorage.setItem('idAdmin', String(i + 1));
      }

    }
    if (pu==true&&nu==true){
      return 1;
    }
    if (pa==true&&na==true){
      return 2
    }
    else {
      return 0;
    }
  }
}
