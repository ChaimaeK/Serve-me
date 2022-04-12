package com.example.cm18octobre2021.dao;

import com.example.cm18octobre2021.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ReservationInterface extends JpaRepository<Reservation, Long> {

    List<Reservation> findByDemandeurId(Long demandeurId);
    List<Reservation> findByActeurId(Long acteurId);
}
