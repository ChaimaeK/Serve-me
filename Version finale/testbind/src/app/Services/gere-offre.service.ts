import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { authenticationService } from "./auth.Services";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GereOffreService {

  public offres:any;
  public demandes:any;
  isUser=localStorage.getItem('idUser');
  var1:any;
  var2:any;
  var3:any;
  var4:any;
  var5:any;
  var6:any;

  constructor(private httpClient: HttpClient, private authService: authenticationService, private router: Router) { }



  onGetOffres() {
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

  /*onReserve() {
    if (!this.authService.isUser()) {
      this.router.navigate(['/admi']);
    }
  }*/
  onGetDemandes() {
    this.httpClient.get('http://localhost:9797/demandes')
      .subscribe(data=>{
        this.demandes=data;
      },err=>{
        console.log(err);
      })
  }
  deleteDemande(idp:any){
    return this.httpClient.delete('http://localhost:9797/demandes/'+idp);
  }
  onDeleteDemande(d:any) {
    let conf =confirm("Etes vous sûr?");
    if(conf){
      this.deleteDemande(d)
        .subscribe(data=>{
          this.onGetDemandes();
        },err=>{
          console.log(err);
        })
    }
  }

  /*conserve1(idPub: any, name: any, text: string, created: any, type: any, demandeurId: any) {
    this.var1=idPub;
    this.var2=name;
    this.var3=text;
    this.var4=created;
    this.var5=type;
    this.var6=demandeurId;
    this.conserve2(idPub);
    localStorage.setItem('test1', this.var2);
  }*/

  conserve2(idPub: any) {
    this.httpClient.put('http://localhost:9797/demandes/'+idPub,{name:localStorage.getItem('nameD'+idPub+this.isUser),text:localStorage.getItem('textD'+idPub+this.isUser),created:localStorage.getItem('createdD'+idPub+this.isUser),type:localStorage.getItem('typeD'+idPub+this.isUser),online:'true',demandeurId:localStorage.getItem('demandeurId'+idPub+this.isUser)})
      .subscribe(data=>{
        this.onGetDemandes();
        localStorage.removeItem('idPubD'+idPub+this.isUser);
        localStorage.removeItem('nameD'+idPub+this.isUser);
        localStorage.removeItem('textD'+idPub+this.isUser);
        localStorage.removeItem('createdD'+idPub+this.isUser);
        localStorage.removeItem('typeD'+idPub+this.isUser);
        localStorage.removeItem('demandeurId'+idPub+this.isUser);
      },err=>{
        console.log(err);
      })
  }

  onDeleteRes(idFacture: any) {
    this.httpClient.delete('http://localhost:9797/reservations/'+idFacture)
      .subscribe(data=>{
        this.httpClient.get('http://localhost:9797/reservations');
      },err=>{
        console.log(err);
      })
  }

  conserve3(idPub: any) {
    this.httpClient.put('http://localhost:9797/offres/'+idPub,{name:localStorage.getItem('nameO'+idPub+this.isUser),text:localStorage.getItem('textO'+idPub+this.isUser),created:localStorage.getItem('createdO'+idPub+this.isUser),type:localStorage.getItem('typeO'+idPub+this.isUser),prix:localStorage.getItem('prixO'+idPub+this.isUser),online:'true',acteurId:localStorage.getItem('acteurId'+idPub+this.isUser)})
      .subscribe(data=>{
        this.onGetDemandes();
        localStorage.removeItem('idPubO'+idPub+this.isUser);
        localStorage.removeItem('nameO'+idPub+this.isUser);
        localStorage.removeItem('textO'+idPub+this.isUser);
        localStorage.removeItem('createdO'+idPub+this.isUser);
        localStorage.removeItem('typeO'+idPub+this.isUser);
        localStorage.removeItem('prixO'+idPub+this.isUser);
        localStorage.removeItem('acteurId'+idPub+this.isUser);
      },err=>{
        console.log(err);
      })
  }
}
