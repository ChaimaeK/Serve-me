import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Model/User.Model";
import {userServices} from "../Services/user.Services";
import {Subscription} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot-offre',
  templateUrl: './depot-offre.component.html',
  styleUrls: ['./depot-offre.component.css']
})
export class DepotOffreComponent implements OnInit {

  varf:any;
  vars:any;
  vart:any;
  varh:any;
  isConnected=localStorage.getItem('loguser');
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  ajouterOffre() {
    if(this.isConnected!='true'){
      this.router.navigate(['/depO']);
    }
    else{
    this.varf=(<HTMLInputElement>document.getElementById("professionelle")).value;
    this.vars=(<HTMLInputElement>document.getElementById("description")).value;
    this.vart=(<HTMLInputElement>document.getElementById("prixo")).value;
    this.varh=(new Date()).toLocaleDateString()+'  '+(new Date()).toLocaleTimeString();

    let conf =confirm("Etes vous sûr?");
    if(conf){
      this.onAjouter(this.varf,this.vars,this.vart, this.varh)
        .subscribe((data:any)=>{
          this.httpClient.get('http://localhost:9797/offres');
        },(err:any)=>{
          console.log(err);
        })
    }
    }
  }

  onAjouter(varf: any, vars: any, vart: any, varh:any) {
    return this.httpClient.post('http://localhost:9797/offres/',{ acteurId: localStorage.getItem('idUser'),name:varf,text:vars,created:varh,online:'true',type:'offre',prix:vart});
  }

}
