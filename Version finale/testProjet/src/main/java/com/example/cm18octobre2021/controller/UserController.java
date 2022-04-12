package com.example.cm18octobre2021.controller;

import com.example.cm18octobre2021.dao.UserInterface;
import com.example.cm18octobre2021.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class UserController {
    @Autowired
    private UserInterface userInterface;

    @GetMapping(value="/users")
    public Iterable<User> getAllUser(){
        Iterable<User> userCollections = userInterface.findAll();
        return userCollections;
    }

    @GetMapping("/users/{Id_user}")
    public User getOneacteur(@PathVariable long Id_user){
        User user = new User();
        Optional<User> optionalUser = userInterface.findById(Id_user);
        if(optionalUser.isPresent()){
            user =optionalUser.get();
        }
        return user;
    }
    /*@CrossOrigin(origins="http://localhost:4200/")
    @GetMapping("/users/{full_name}/{password}")
    public User getUserByname(@PathVariable String full_name, @PathVariable String password) {
        Iterable<User> users = userInterface.findAll();
        for(User user:users){
            if(user.getFull_name().equals(full_name)&& user.getPassword().equals(password)){
                return user;
            }
        }
        return null;
    }*/

    @PostMapping(path = "/users")
    public User saveActeur(@RequestBody User newuser) {
        return userInterface.save(newuser);
    }

    @DeleteMapping("/users/{id_user}")
    public void delete(@PathVariable long id_user){
        userInterface.deleteById(id_user);
    }

    @PutMapping("/users/{id_user}")
    public User update(@RequestBody User user, @PathVariable long id_user){
        user.setId_user(id_user);
        return  userInterface.save(user);
    }

}

