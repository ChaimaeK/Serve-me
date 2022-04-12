package com.example.cm18octobre2021.dao;

import com.example.cm18octobre2021.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AdminInterface extends JpaRepository<Admin, Long> {
}
