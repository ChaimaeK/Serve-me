package com.example.cm18octobre2021.entities;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Getter
@Setter
@ToString
@MappedSuperclass
public abstract class Publication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long idPub;
    private String name;
    private String text;
    private String created;
    private Boolean online;

    public Publication() {
    }
    public Publication(String name, String text, String created, Boolean online){
        this.name = name;
        this.text = text;
        this.created = created;
        this.online = online;
    }
   /* public static  Publication modifier(String name, String text, Date created, Boolean online, String type){
       Publication pub=new Publication(name,  text,  created,  online,  type);
       return pub;
    }
    public void supprimer(int idPub) {
        this.idPub=0;
    }*/
}
