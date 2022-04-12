import {Injectable} from "@angular/core";
import {Admin} from "../Model/Admin.Model";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class adminServices{
  private admins: Admin[] = [new Admin(0,'null@null.com','null',"null",0)];
  userSubject = new Subject<Admin[]>();

  constructor(private httpClient:HttpClient) {
  }

  emitAdmin() {
    this.userSubject.next(this.admins.slice());
  }

  addAdmin(admin: Admin) {
    this.admins.push(admin);
    this.emitAdmin();
  }

  saveAdminToServer(admin: Admin) {
    this.httpClient.post('http://localhost:9797/admins' , { id_user:admin.id_user,
      full_name:admin.full_name,
      password:admin.password,
      telephone:admin.telephone,
      email:admin.email,})
      .subscribe(
        () => {
          console.log('Ok');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  getAdminFromServer() {
    this.httpClient
      .get<any[]>('http://localhost:9797/admins')
      .subscribe(
        (response) => {
          this.admins = response;
          this.emitAdmin();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  deleteAdmin(id_user:any){
    return this.httpClient.delete('http://localhost:9797/admins/'+id_user);
  }


  onDeleteAdmin(id_user:any) {
    let conf = confirm("Etes vous sûr?");
    if (conf) {
      this.deleteAdmin(id_user)
        .subscribe(data => {
          this.getAdminFromServer();
        }, err => {
          console.log(err);
        })
    }
  }
}
