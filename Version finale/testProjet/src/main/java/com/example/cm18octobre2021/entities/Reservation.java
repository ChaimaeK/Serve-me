package com.example.cm18octobre2021.entities;

import lombok.*;

import javax.persistence.*;

@Data @AllArgsConstructor @ToString @Getter @Setter @Entity
public  class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idFacture;
    private long idPub;
    private long acteurId;
    private long demandeurId;
    private String dateReservation;
    private double tarif;
    private Boolean etat;
    private Boolean confirmee;

    public Reservation(){

    }
    public Reservation(long idPub, long acteurId, long demandeurId,String dateReservation, double tarif,Boolean etat,Boolean confirmee){
        this.idPub = idPub;
        this.acteurId=acteurId;
        this.demandeurId = demandeurId;
        this.dateReservation = dateReservation;
        this.tarif = tarif;
        this.etat=etat;
        this.confirmee=confirmee;


    }


}
