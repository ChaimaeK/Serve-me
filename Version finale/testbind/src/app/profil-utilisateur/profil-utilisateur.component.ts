import { Component, OnInit } from '@angular/core';
import {User} from "../Model/User.Model";
import {Subscription} from "rxjs";
import {Admin} from "../Model/Admin.Model";
import {userServices} from "../Services/user.Services";
import {adminServices} from "../Services/admin.Services";
import { HttpClient } from '@angular/common/http';
import { GereOffreService } from '../Services/gere-offre.service';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {

  public users: User[] = [];
  public userSubscription: Subscription = new Subscription;
  public admins: Admin[] = [];
  public adminSubscription: Subscription = new Subscription;

  isAdmin: any = localStorage.getItem('logadmin');
  isConnect: any  = localStorage.getItem('loguser');
  idUserS:any = localStorage.getItem('idUser');
  idAdminS: any = localStorage.getItem('idAdmin');
  newUser: any = localStorage.getItem('new');
  name:any = localStorage.getItem('name');
  password:any = localStorage.getItem('password');
  idUser = parseInt(this.idUserS) -1;
  idAdmin = parseInt(this.idAdminS) -1;
  demandes:any;
  offres: any;
  reservations: any;
  mesReservations: any;






  constructor(
    private userService: userServices,
    private adminService: adminServices,
    private httpClient: HttpClient,
    private demandeService: GereOffreService
  ) { }


  ngOnInit(): void {


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

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }


  onGetDemandesByUserapp(idUserS: any) {
    this.httpClient.get('http://localhost:9797/demande?demandeurId='+ idUserS)
      .subscribe(data=>{
        this.demandes=data;
        },err=>{
        console.log(err);
        })
  }

  onGetOffresByUserapp(idu: any){
    this.httpClient.get('http://localhost:9797/offre?acteurId='+idu)
      .subscribe(data=>{
        this.offres=data;
      },err=>{
        console.log(err);
      })

  }

    onGetReservationsRecu(idUserS: any) {
      this.httpClient.get('http://localhost:9797/reservationn?acteurId='+idUserS)
        .subscribe(data=>{
          this.reservations=data;
        },err=>{
          console.log(err);
        })
    }

  onConfirmerReservation(idFacture: any, idPub: any, acteurId: any, demandeurId: any, dateReservation: any, tarif: any, etat: any) {
    this.httpClient.put('http://localhost:9797/reservations/'+idFacture,{idPub: idPub,acteurId:acteurId,demandeurId:demandeurId, dateReservation:dateReservation, tarif:tarif , etat:etat,confirmee:'true'})
      .subscribe(data=>{
        this.httpClient.get('http://localhost:9797/reservations');
        window.location.reload();
      },err=>{
        console.log(err);
      })
  }

  onGetMesReservations(idUserS: any) {
    this.httpClient.get('http://localhost:9797/reservation?demandeurId='+idUserS)
      .subscribe(data=>{
        this.mesReservations=data;
      },err=>{
        console.log(err);
      })
  }

  onDeleteOffree(idPub: any) {
    let conf =confirm("Etes vous sûr?");
    if(conf){
      this.httpClient.delete('http://localhost:9797/offres/'+idPub)
        .subscribe(data=>{
          this.httpClient.get('http://localhost:9797/offres');
          window.location.reload();
          },err=>{
          console.log(err);
          }

        )
    }
  }

  conserve(idPub: any, name:any, text: string , online: any, prix: any) {
    localStorage.setItem("idOffre",idPub);
    localStorage.setItem("nameO",name);
    localStorage.setItem("textO",text);
    localStorage.setItem("onlineO",online);
    localStorage.setItem("prixO",prix);
  }

  onDeleteDemandee(idPub: any) {
    let conf =confirm("Etes vous sûr?");
    if(conf){
      this.httpClient.delete('http://localhost:9797/demandes/'+idPub)
        .subscribe(data=>{
          this.httpClient.get('http://localhost:9797/demandes');
          window.location.reload();
        },err=>{
          console.log(err);
        })
    }
  }

  conserveD(idPub: any, name:any, text: string , online: any) {
    localStorage.setItem("idDem",idPub);
    localStorage.setItem("nameD",name);
    localStorage.setItem("textD",text);
    localStorage.setItem("onlineD",online);
  }

  onContacter(acteurId: any) {

  }

  onAnnulerReservation(idPub: any) {
      this.demandeService.conserve2(idPub);
  }

  onDeleteReservation(idFacture: any) {
    this.demandeService.onDeleteRes(idFacture)
  }

  onAnnulerOf(idPub: any) {
    this.demandeService.conserve3(idPub);
  }
}
