import {User} from "../Model/User.Model";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class userServices{


  private users: User[] = [new User(0,'null@null.com','null',"null",0,'null', 0, false, "null",0)];
  userSubject = new Subject<User[]>();
  public currentUser:User = this.users[this.users.length-1];

  constructor(private httpClient:HttpClient) {
  }

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  saveUserToServer(user: User) {
    //this.currentUser = user;
    this.httpClient.post('http://localhost:9797/users' , { id_user:user.id_user,
      full_name:user.full_name,
      password:user.password,
      telephone:parseInt(""+ user.telephone),
      email:user.email,
      profession:user.profession,
      disponible: user.disponible,
      total_services:user.total_services,
      codePostal:user.codePostal,
      adresse:user.adresse,})
      .subscribe(
        () => {
          console.log('Ok');
          this.currentUser = user;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  getUserFromServer() {
    this.httpClient
      .get<any[]>('http://localhost:9797/users')
      .subscribe(
        (response) => {
          this.users = response;
          this.emitUsers();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  deleteUser(id_user:any){
    return this.httpClient.delete('http://localhost:9797/users/'+id_user);
  }


  onDeleteUser(id_user:any) {
    let conf =confirm("Etes vous sûr?");
    if(conf){
      this.deleteUser(id_user)
        .subscribe(data=>{
          this.getUserFromServer();
          window.location.reload();
        },err=>{
          console.log(err);
        })
    }
  }

  getOneUser(id_user:any){
    return this.httpClient.get('http://localhost:9797/users/'+id_user);
  }


}
