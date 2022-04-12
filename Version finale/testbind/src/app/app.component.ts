import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConnexionComponent} from "./connexion/connexion.component";
import {GereOffreService} from "./Services/gere-offre.service";
import {userServices} from "./Services/user.Services";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testbind';
  name:any= localStorage.getItem('name');
  isConnected:any = localStorage.getItem('loguser');
  isAdmin:any = localStorage.getItem('logadmin');
  constructor(public gere : GereOffreService, public userservices: userServices, public router: Router){}

  onGetOffresapp() {
    this.gere.onGetOffres();
  }


  onGetDemandesapp() {
    this.gere.onGetDemandes();
  }

  decon() {
    localStorage.removeItem('idUser');
    localStorage.removeItem('name');
    localStorage.removeItem('logadmin');
    localStorage.removeItem('password');
    localStorage.removeItem('loguser');
    this.router.navigate(['/Connexion'])
      .then(() => {
        window.location.reload();
      });

  }


}
