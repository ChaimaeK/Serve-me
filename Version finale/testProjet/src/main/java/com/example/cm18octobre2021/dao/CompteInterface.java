package com.example.cm18octobre2021.dao;

import com.example.cm18octobre2021.entities.Compte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface CompteInterface extends JpaRepository<Compte, Long> {
    /*public Compte Inscription(int Id_user , String full_name ,String password ,int telephone, String email);
    public String Connexion(String full_name, String password);*/
}
