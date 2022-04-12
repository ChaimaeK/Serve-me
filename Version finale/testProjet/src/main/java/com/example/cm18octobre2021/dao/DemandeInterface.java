package com.example.cm18octobre2021.dao;

import com.example.cm18octobre2021.entities.Demande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource
@CrossOrigin(origins="http://localhost:4200/")
public interface DemandeInterface extends JpaRepository<Demande, Long> {
    List<Demande> findByNameContains(String name);

    List<Demande> findByDemandeurId(Long demandeurId);
}
