package com.example.cm18octobre2021.controller;


import com.example.cm18octobre2021.dao.DemandeInterface;

import com.example.cm18octobre2021.entities.Demande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class DemandeController {

    @Autowired
    private DemandeInterface demandeInterface;

    @GetMapping(value="/demandes")
    @CrossOrigin(origins="http://localhost:4200/")
    public List<Demande> getAllDemande(){
        List<Demande> demandesCollections = demandeInterface.findAll();
        return demandesCollections;
    }

    @GetMapping("/demande")
    @CrossOrigin(origins="http://localhost:4200/")
    public List<Demande> findAll(@RequestParam Long demandeurId){
        return demandeInterface.findByDemandeurId(demandeurId);
    }

    @GetMapping("/demandee")
    @CrossOrigin(origins="http://localhost:4200/")
    public List<Demande> findAllD(@RequestParam String name){
        return demandeInterface.findByNameContains(name);
    }


    @GetMapping("/demandes/{idPub}")
    public Demande getOneDemande(@PathVariable long idPub){
        Demande demande = new Demande();
        Optional<Demande> optionalDemande = demandeInterface.findById(idPub);
        if(optionalDemande.isPresent()){
            demande=optionalDemande.get();
        }
        return demande;
    }


    @PostMapping(path = "/demandes")
    @CrossOrigin(origins="http://localhost:4200/")
    public Demande saveDemande(@RequestBody Demande newdemande) {
        return demandeInterface.save(newdemande);
    }

    @DeleteMapping("/demandes/{idPub}")
    @CrossOrigin(origins="http://localhost:4200/")
    public void delete(@PathVariable long idPub){
        demandeInterface.deleteById(idPub);
    }

    @PutMapping("/demandes/{idPub}")
    @CrossOrigin(origins="http://localhost:4200/")
    public  Demande update(@RequestBody Demande demande, @PathVariable long idPub){
        demande.setIdPub(idPub);
        return  demandeInterface.save(demande);
    }
}
