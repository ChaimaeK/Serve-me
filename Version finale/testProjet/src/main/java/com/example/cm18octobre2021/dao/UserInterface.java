package com.example.cm18octobre2021.dao;

import com.example.cm18octobre2021.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UserInterface extends JpaRepository<User, Long> {
}