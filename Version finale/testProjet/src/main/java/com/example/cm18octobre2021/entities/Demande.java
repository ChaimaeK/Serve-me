package com.example.cm18octobre2021.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Getter
@Setter
@Entity
public class Demande extends Publication{
    private long demandeurId;
    private String type;
    public Demande(){}
    public Demande(long demandeurId, String name, String text, String created, Boolean online, String type){
        super(name, text, created, online);
        this.demandeurId = demandeurId;
        this.type = type;
    }

}
