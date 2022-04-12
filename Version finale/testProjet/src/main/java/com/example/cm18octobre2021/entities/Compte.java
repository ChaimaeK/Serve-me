package com.example.cm18octobre2021.entities;

import lombok.*;

import javax.persistence.*;

@Data  @Getter @Setter  @ToString
 @MappedSuperclass
public abstract class Compte {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long Id_user ;
    private String full_name;
    private String password;
    private long telephone;
    private String email;
    public Compte(){
    }

    public Compte(String full_name, String password, long telephone, String email) {
        this.full_name = full_name;
        this.password = password;
        this.telephone = telephone;
        this.email = email;
    }
    /*public Compte Inscription(String full_name ,String password ,long telephone, String email) {
        Compte nouveau = new Compte ( full_name ,password ,telephone, email);
        return nouveau;
    }

    public String Connexion(String full_name, String password) {
        return email + " " + telephone + " " + Id_user;
    }*/
}
