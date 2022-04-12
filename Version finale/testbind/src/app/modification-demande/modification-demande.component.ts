import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modification-demande',
  templateUrl: './modification-demande.component.html',
  styleUrls: ['./modification-demande.component.css']
})
export class ModificationDemandeComponent implements OnInit {

  var2:any;
  var3:any;
  var4:any;
  var5:any;
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    document.getElementById("description")!.innerHTML=<string>localStorage.getItem("textD");
    document.getElementById("online")!.innerHTML=<string>localStorage.getItem("onlineD");
  }

  onUpdateDemande(){
    this.var2=(<HTMLInputElement>document.getElementById("domaine")).value;
    this.var3=(<HTMLInputElement>document.getElementById("description")).value;
    this.var4=(new Date()).toLocaleDateString()+'  '+(new Date()).toLocaleTimeString();
    this.var5=(<HTMLInputElement>document.getElementById("online")).value;

    let conf =confirm("Etes vous sûr?");
    if(conf){
      this.onUpdate(this.var2,this.var3,this.var4,this.var5).subscribe(
        data=>{
          this.httpClient.get('http://localhost:9797/demandes');
          this.router.navigate(['/ProfilUtilisateur']);
        },err=>{
          console.log(err);
        })
    }
  }


  onUpdate(var2: any, var3: any, var4:any, var5:any) {
    return this.httpClient.put('http://localhost:9797/demandes/'+localStorage.getItem("idDem"),{idPub:localStorage.getItem("idDem"), name:var2,text:var3, created: var4,online:var5,type:'demande',demandeurId: localStorage.getItem("idUser")});
  }
}
