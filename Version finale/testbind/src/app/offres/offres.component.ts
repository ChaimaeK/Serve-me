import { Component, OnInit } from '@angular/core';
import {authenticationService} from "../Services/auth.Services";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GereOffreService} from "../Services/gere-offre.service";

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  var0:any;
  var1:any;
  var2:any;
  var3:any;
  var4:any;
  var5:any;
  var6:any;
  var7:any;
  isAdmin=localStorage.getItem('logadmin');
  isUser=localStorage.getItem('loguser');
  isUsers=localStorage.getItem('idUser');
  constructor(public offreService: GereOffreService, public authService:authenticationService, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {

  }

  /*onGetOffres() {
    this.httpClient.get('http://localhost:9797/offres')
      .subscribe(data=>{
        this.offres=data;
      },err=>{
        console.log(err);
      })
  }
  deleteOffre(idp:any){
    return this.httpClient.delete('http://localhost:9797/offres/'+idp);
  }
  onDeleteOffre(o:any) {
    let conf =confirm("Etes vous sûr?");
    if(conf){
      this.deleteOffre(o)
        .subscribe(data=>{
            this.onGetOffres();
        },err=>{
            console.log(err);
        })
    }
  }
  onReserve() {
    if(!this.authService.isUser()){
      this.router.navigate(['/admi']);
    }
  }*/
  onDeleteOffree(idPub: any) {
    this.offreService.onDeleteOffre(idPub);
  }

  /*onReservee(idPubo: any, name:any, text: any , type:any, prix: any, acteurId: any) {
    if (!this.authService.isUser()) {
      this.offreService.onReserve();

    }
    else{

      this.var4=(new Date()).toLocaleDateString()+'  '+(new Date()).toLocaleTimeString();
      this.httpClient.put('http://localhost:9797/offres/'+idPubo,{name: name,text:text,created:this.var4,online:'false', type:type,prix:prix, acteurId:acteurId})
        .subscribe((data:any)=>{
          this.httpClient.get('http://localhost:9797/offres');
        },(err:any)=>{
          console.log(err);
        })
      window.location.reload();
    }

  }*/


  onChercher(value:any) {
    this.httpClient.get('http://localhost:9797/offree?name='+value.keyword)
      .subscribe(data=>{
        this.offreService.offres=data;
      },err=>{
        console.log(err);
      })
  }

  onReservee(idPub: any, name:any, text: string, created:any , type:any, prix: any, acteurId: any) {
      if(this.isUser=='true'){
        localStorage.setItem('idPubO'+idPub+this.isUsers,idPub);
        localStorage.setItem('nameO'+idPub+this.isUsers,name);
        localStorage.setItem('textO'+idPub+this.isUsers,text);
        localStorage.setItem('createdO'+idPub+this.isUsers,created);
        localStorage.setItem('typeO'+idPub+this.isUsers,type);
        localStorage.setItem('prixO'+idPub+this.isUsers,prix);
        localStorage.setItem('acteurId'+idPub+this.isUsers,acteurId);
        this.httpClient.put('http://localhost:9797/offres/'+idPub,{name: name,text:text,created:created,online:'false', type:type,prix:prix, acteurId:acteurId})
          .subscribe(data=>{
            this.httpClient.get('http://localhost:9797/offres');
            window.location.reload();
          },err=>{
            console.log(err);
          })
      }
      else{
        this.router.navigate(['/Connexion']);
      }
  }

  ajouterReservation(idPub: any, prix: any, acteurId: any) {
    this.var1=idPub;
    this.var2=prix;
    this.var3=acteurId;
    this.var5=(new Date()).toLocaleDateString()+'  '+(new Date()).toLocaleTimeString();

    this.onAjouterRes(this.var1,this.var2,this.var3, this.var5)
      .subscribe(data=>{
        this.httpClient.get('http://localhost:9797/reservations');
      },err=>{
        console.log(err);
      })
  }

  private onAjouterRes(var1: any, var2: any, var3: any, var5: any) {
    return this.httpClient.post('http://localhost:9797/reservations/',{ idPub:var1, acteurId:var3, demandeurId: localStorage.getItem('idUser'), dateReservation:var5, tarif:var2,etat:'true',confirmee:'false'});
  }
}
