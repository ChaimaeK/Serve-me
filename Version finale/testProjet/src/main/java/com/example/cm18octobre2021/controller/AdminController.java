package com.example.cm18octobre2021.controller;

import com.example.cm18octobre2021.dao.AdminInterface;
import com.example.cm18octobre2021.entities.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class AdminController {
    @Autowired
    private AdminInterface adminInterface;

    @GetMapping(value="/admins")
    public Iterable<Admin> getAllUser(){
        Iterable<Admin> adminCollections = adminInterface.findAll();
        return adminCollections;
    }

    @GetMapping("/admin/{Id_user}")
    public Admin getOneacteur(@PathVariable long Id_user){
        Admin admin = new Admin();
        Optional<Admin> optionalAdmin = adminInterface.findById(Id_user);
        if(optionalAdmin.isPresent()){
            admin = optionalAdmin.get();
        }
        return admin;
    }
    /*@CrossOrigin(origins="http://localhost:4200/")
    @GetMapping("/admins/{full_name}/{password}")
    public Admin getAdminByname(@PathVariable String full_name, @PathVariable String password){
        Iterable<Admin> admins = adminInterface.findAll();
        for(Admin admin:admins){
            if(admin.getFull_name().equals(full_name)&& admin.getPassword().equals(password)){
                return admin;
            }
        }
        return null;
    }*/

    @PostMapping(path = "/admins")
    public Admin saveActeur(@RequestBody Admin newadmin) {
        return adminInterface.save(newadmin);
    }

    @DeleteMapping("/admins/{id_user}")
    public void delete(@PathVariable long id_user){
        adminInterface.deleteById(id_user);
    }

    @PutMapping("/admins/{id_user}")
    public Admin update(@RequestBody Admin admin, @PathVariable long id_user){
        admin.setId_user(id_user);
        return  adminInterface.save(admin);
    }
}
