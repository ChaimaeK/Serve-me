import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  var2:any;
  var3:any;
  var4:any;
  var5:any;
  var6:any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    document.getElementById("description")!.innerHTML=<string>localStorage.getItem("textO");
    document.getElementById("prixo")!.innerHTML=<string>localStorage.getItem("prixO");
    document.getElementById("online")!.innerHTML=<string>localStorage.getItem("onlineO");
  }


  onUpdate(var2: any, var3: any, var4:any, var5: any, var6: any) {
    return this.httpClient.put('http://localhost:9797/offres/'+localStorage.getItem("idOffre"),{idPub:localStorage.getItem("idOffre"), name:var2,text:var3, created: var4,online:var5,type:'offre',prix:var6,acteurId:localStorage.getItem("idUser")});
  }

onUpdateOffre()
{
  this.var2 = (<HTMLInputElement>document.getElementById("professionelle")).value;
  this.var3 = (<HTMLInputElement>document.getElementById("description")).value;
  this.var4 = (new Date()).toLocaleDateString() + '  ' + (new Date()).toLocaleTimeString();
  this.var5 = (<HTMLInputElement>document.getElementById("online")).value;
  this.var6 = (<HTMLInputElement>document.getElementById("prixo")).value;

  let conf = confirm("Etes vous sûr?");
  if (conf) {
    this.onUpdate(this.var2, this.var3, this.var4, this.var5, this.var6)
      .subscribe(data => {
        this.httpClient.get('http://localhost:9797/offres');
        this.router.navigate(['/ProfilUtilisateur']);
      }, err => {
        console.log(err);
      })
  }
}
}
