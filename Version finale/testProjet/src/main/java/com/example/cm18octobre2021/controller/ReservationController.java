package com.example.cm18octobre2021.controller;

import com.example.cm18octobre2021.dao.ReservationInterface;
import com.example.cm18octobre2021.entities.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReservationController {
    @Autowired
    private ReservationInterface reservationInterface;

    @GetMapping(value="/reservations")
    @CrossOrigin(origins="http://localhost:4200/")
    public List<Reservation> findAllReservations(){
        return reservationInterface.findAll();
    }

    @GetMapping("/reservation")
    @CrossOrigin(origins="http://localhost:4200/")
    public List<Reservation> getByDemandeur(@RequestParam Long demandeurId){
        return reservationInterface.findByDemandeurId(demandeurId);
    }
    @GetMapping("/reservationn")
    @CrossOrigin(origins="http://localhost:4200/")
    public List<Reservation> getByActeur(@RequestParam Long acteurId){
        return reservationInterface.findByActeurId(acteurId);
    }


    @PostMapping(path ="/reservations")
    @CrossOrigin(origins="http://localhost:4200/")
    public Reservation saveReservation(@RequestBody Reservation newReservation){
        return reservationInterface.save(newReservation);
    }
    @DeleteMapping("/reservations/{idFacture}")
    @CrossOrigin(origins="http://localhost:4200/")
    public void delete(@PathVariable long idFacture){

        reservationInterface.deleteById(idFacture);
    }

    @PutMapping("/reservations/{idFacture}")
    @CrossOrigin(origins="http://localhost:4200/")
    public Reservation update(@RequestBody Reservation reservation, @PathVariable long idFacture){
        reservation.setIdFacture(idFacture);
        return reservationInterface.save(reservation);
    }
}
