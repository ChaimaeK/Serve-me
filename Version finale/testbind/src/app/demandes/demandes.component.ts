import { Component, OnInit } from '@angular/core';
import { GereOffreService } from '../Services/gere-offre.service';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  var9: any;
  constructor(public demandeService:GereOffreService,private httpClient: HttpClient, private router: Router) { }
  isAdmin=localStorage.getItem('logadmin');
  isUser=localStorage.getItem('idUser');
  isUsers=localStorage.getItem('loguser');
  ngOnInit(): void {
  }

  onChercher(value:any) {
    this.httpClient.get('http://localhost:9797/demandee?name='+value.keyword)
      .subscribe(data=>{
        this.demandeService.demandes=data;
      },err=>{
        console.log(err);
      })
  }

  onDeleteDemandee(d:any) {
    let conf =confirm("Etes vous sûr?");
    if(conf){
      this.httpClient.delete('http://localhost:9797/demandes/'+d)
        .subscribe(data=>{
          this.demandeService.demandes=data;
        },err=>{
          console.log(err);
        })
    }
  }

  onReservee(idPub: any, name:any, text: string , created: any, type:any, demandeurId: any) {
    if (this.isUsers!='true') {
      this.router.navigate(['/Connexion']);

    }
    else{
      //this.var4=(new Date()).toLocaleDateString()+'  '+(new Date()).toLocaleTimeString();
      localStorage.setItem('idPubD'+idPub+this.isUser,idPub);
      localStorage.setItem('nameD'+idPub+this.isUser,name);
      localStorage.setItem('textD'+idPub+this.isUser,text);
      localStorage.setItem('createdD'+idPub+this.isUser,created);
      localStorage.setItem('typeD'+idPub+this.isUser,type);
      localStorage.setItem('demandeurId'+idPub+this.isUser,demandeurId);
      this.httpClient.put('http://localhost:9797/demandes/'+idPub,{name: name,text:text,created:created,online:'false', type:type, demandeurId:demandeurId})
        .subscribe(data=>{
          this.httpClient.get('http://localhost:9797/demandes');
        },err=>{
          console.log(err);
        } )
      //window.location.reload();
    }
  }



  ajouterReservation(idPub: any, demandeurId: any) {
    this.var9=(new Date()).toLocaleDateString()+'  '+(new Date()).toLocaleTimeString();

    this.httpClient.post('http://localhost:9797/reservations/',{ idPub:idPub, acteurId:localStorage.getItem('idUser'), demandeurId:demandeurId, dateReservation:this.var9, tarif:'0',etat:'true',confirmee:'false'})
      .subscribe(data=>{
        this.httpClient.get('http://localhost:9797/reservations');
      },err=>{
        console.log(err);
      })
  }
}
