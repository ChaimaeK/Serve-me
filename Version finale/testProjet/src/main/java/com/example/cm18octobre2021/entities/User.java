package com.example.cm18octobre2021.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Data
@Getter
@Setter
@Entity
public class User extends Compte{
    private String profession;
    private boolean disponible;
    private int total_services;
    private int codePostal;
    private String adresse;
    public User(){}
    public User(String full_name , String password , long telephone, String email, String profession, boolean disponible, int total_services, int codePostal, String adresse){
        super(full_name, password,telephone,email);
        this.profession=profession;
        this.disponible=disponible;
        this.total_services=total_services;
        this.codePostal=codePostal;
        this.adresse=adresse;


    }

}
