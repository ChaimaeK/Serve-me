package com.example.cm18octobre2021.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Getter
@Setter
@Entity
public class Admin extends Compte {
    public Admin() {}
    public Admin(String full_name ,String password ,long telephone, String email){
        super(full_name, password,telephone,email);
    }
}
