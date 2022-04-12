import {Component, OnDestroy, OnInit} from '@angular/core';
import {Admin} from "../Model/Admin.Model";
import {Subscription} from "rxjs";
import {adminServices} from "../Services/admin.Services";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit, OnDestroy {

  public admins: Admin[] = [];
  public adminSubscription: Subscription = new Subscription;

  constructor(private adminService: adminServices) { }

  ngOnInit() {
    this.adminSubscription = this.adminService.userSubject.subscribe(
      (admins: Admin[]) => {
        this.admins = admins;
      }
    );
    this.adminService.getAdminFromServer();
    this.adminService.emitAdmin();
  }



  ngOnDestroy() {
    this.adminSubscription.unsubscribe();
  }

  deleteAdmin(id:number){
    this.adminService.onDeleteAdmin(id);
  }

}
