package com.example.cm18octobre2021;


//import com.example.cm18octobre2021.controller.OffreController;
import com.example.cm18octobre2021.dao.*;
import com.example.cm18octobre2021.entities.*;

/*import com.example.cm18octobre2021.dao.AdminInterface;
import com.example.cm18octobre2021.dao.CompteInterface;*/
/*import com.example.cm18octobre2021.entities.Admin;
import com.example.cm18octobre2021.entities.Compte;*/

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static java.time.LocalTime.now;

@SpringBootApplication
public class Cm18octobre2021Application {
    /*@Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
    @Autowired
    private OffreInterface offreInterface;
    private DemandeInterface demandeInterface;
    @Override
    public void run(String...args) throws Exception {
        //créer une offre
        Offre offre=new Offre(11,"maths", "ggttrgtr",  new Date(), true, "offre",200);
        offreInterface.save(offre);
        //créer une demande
        Demande demande=new Demande(1, "kap", "0600000000", new Date(), true, "Nancy");
        demandeInterface.save(demande);
    }*/
    public static void main(String[] args) {
        SpringApplication.run(Cm18octobre2021Application.class, args);
    }

    @Bean

    CommandLineRunner runner(AdminInterface adminInterface) {

        return args -> {
            adminInterface.save(new Admin("admin","123", Long.parseLong("0626282859"), "ok@gmail.com"));
            /*demandeurInterface.save(new Demandeur("Chaimae", "kap", 0600000000, "ch@univ.fr", 54500, "Nancy"));
            demandeurInterface.save(new Demandeur("Chaimae", "kap", 0600000000, "ch@univ.fr", 54500, "Nancy"));
            demandeurInterface.save(new Demandeur("Chaimae", "kap", 0600000000, "ch@univ.fr", 54500, "Nancy"));
            demandeurInterface.findAll().forEach(c ->
                    System.out.println(c.getFull_name())

            );*/

        };



    }
}
