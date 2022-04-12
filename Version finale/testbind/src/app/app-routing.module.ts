import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import {UserListComponent} from "./user-list/user-list.component";
import {NewUserComponent} from "./new-user/new-user.component";
import {ProfilUtilisateurComponent} from "./profil-utilisateur/profil-utilisateur.component";
import { OffresComponent } from './offres/offres.component';
import {DepotOffreComponent} from "./depot-offre/depot-offre.component";
import { DemandesComponent } from './demandes/demandes.component';
import { DepotDemandeComponent } from './depot-demande/depot-demande.component';
import {ModificationComponent} from "./modification/modification.component";
import {ModificationDemandeComponent} from "./modification-demande/modification-demande.component";

const routes: Routes = [
  {path: 'Inscription', component:NewUserComponent},
  {path: 'VoirInscrit' , component:UserListComponent},
  {path: 'Connexion' , component:ConnexionComponent},
  {path: 'ProfilUtilisateur' , component:ProfilUtilisateurComponent},
  {path:'Offres', component:OffresComponent},
  {path:'depO', component:DepotOffreComponent},
  {path:'Demandes', component:DemandesComponent},
  {path:'depD', component:DepotDemandeComponent},
  {path:'modif/:id', component:ModificationComponent},
  {path:'modifD/:id', component:ModificationDemandeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
