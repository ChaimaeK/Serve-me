import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Model/User.Model";
import {Subscription} from "rxjs";
import {userServices} from "../Services/user.Services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-depot-demande',
  templateUrl: './depot-demande.component.html',
  styleUrls: ['./depot-demande.component.css']
})
export class DepotDemandeComponent implements OnInit {

  varf:any;
  vars:any;
  varh:any;
  isConnected=localStorage.getItem('loguser');
  constructor(private httpClient: HttpClient,private userService: userServices, private router: Router) { }


  ngOnInit(): void {

  }

  ajouterDemande() {
    if(this.isConnected!='true'){
        this.router.navigate(['/depD']);
    }
    else{
    this.varf=(<HTMLInputElement>document.getElementById("domaine")).value;
    this.vars=(<HTMLInputElement>document.getElementById("description")).value;
    this.varh=(new Date()).toLocaleDateString()+'  '+(new Date()).toLocaleTimeString();

    let conf =confirm("Etes vous sûr?");
    if(conf){
      this.onAjouter(this.varf,this.vars,this.varh).subscribe(
        (data:any)=>{
          this.httpClient.get('http://localhost:9797/demandes');
        },(err:any)=>{
          console.log(err);
        })
    }
    }
  }

  onAjouter(varf: any, vars: any, varh:any) {
    return this.httpClient.post('http://localhost:9797/demandes/',{ demandeurId: localStorage.getItem('idUser'),name:varf,text:vars,created:varh,online:'true',type:'demande'});
  }
}
