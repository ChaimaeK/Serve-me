package com.example.cm18octobre2021.entities;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Data
@Getter
@Setter
@Entity
public class Offre extends Publication {
    private double prix;
    private long acteurId;
    private String type;
    //@ManyToOne(mappedBy="Offre")
    //private Collection<Paiement> paiement;

    public Offre(){}
    public Offre(long acteurId, String name, String text, String created, Boolean online, String type, double prix){
        super(name, text, created, online);
        this.acteurId = acteurId;
        this.prix = prix;
        this.type=type;
    }
    /*public void confirmer(long idOffre){setOnline(false);
    }
    public  void annuler(long idOffre){
        setOnline(true);
    }*/
}
