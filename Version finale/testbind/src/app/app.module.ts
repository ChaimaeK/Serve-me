import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConnexionComponent } from './connexion/connexion.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UserListComponent } from './user-list/user-list.component';
import {userServices} from "./Services/user.Services";
import {adminServices} from "./Services/admin.Services";
import {authenticationService} from "./Services/auth.Services";
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';
import { MainComponent } from './main/main.component';
import { OffresComponent } from './offres/offres.component';
import { DepotOffreComponent } from './depot-offre/depot-offre.component';
import { DemandesComponent } from './demandes/demandes.component';
import { DepotDemandeComponent } from './depot-demande/depot-demande.component';
import { ModificationComponent } from './modification/modification.component';
import { ModificationDemandeComponent } from './modification-demande/modification-demande.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NewUserComponent,
    AdminListComponent,
    UserListComponent,
    ProfilUtilisateurComponent,
    MainComponent,
    OffresComponent,
    DepotOffreComponent,
    DemandesComponent,
    DepotDemandeComponent,
    ModificationComponent,
    ModificationDemandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,HttpClientModule, FormsModule
  ],
  providers: [
    userServices,
    adminServices,
    authenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
