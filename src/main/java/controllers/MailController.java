package controllers;

import models.Country;
import models.Travel;
import models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.MailService;
import services.TravelService;
import services.UserService;
import java.util.List;

import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
@RestController
public class MailController {

    @Autowired
    MailService mailService;
    @Autowired
    UserService userService;
    @Autowired
    TravelService travelService;

    static String ourEmailName="JourneyJoins@gmail.com";
    static String subject="Join the trip!";

    //need to fix urls
    static String tripUrl="http://localhost:8181/travels/";
    static String registrationUrl="http://localhost:8181/registration/";

    //user - sender
    @GetMapping("/sendEmail/travel={travelId}/user={userId}/{email:.+}")
    public ResponseEntity sendEmail(@PathVariable("email") String email, @PathVariable("travelId") Integer travelId, @PathVariable("userId") Integer userId ) {
        Travel travel=travelService.get(travelId);
        if (travel==null)
            return new ResponseEntity("Travel wasn't found",HttpStatus.NOT_FOUND);

        User sender=userService.get(userId);
        if (sender==null)
            return new ResponseEntity("User wasn't found",HttpStatus.NOT_FOUND);

        User user=userService.getByEmail(email);
        String name;
        if (user==null)
            name=email;
        else
            name=user.getFirstName();

       String countries="";
       if (travel.getCountries()!=null || travel.getCountries().size()>0 ){
           countries="to ";
           for (Country country: travel.getCountries())
              countries+= country.getName()+ ", ";
           if (countries.length()>2)
               countries=countries.substring(0,countries.length()-2);
       }

        Map<String, Object> model = new HashMap<String, Object>();
        model.put("from", ourEmailName);
        model.put("subject", subject);
        model.put("to", email);
        model.put("sender", sender.getFirstName().concat(" ").concat(sender.getLastName()));
        model.put("registrationUrl", registrationUrl );
        model.put("travelName", travel.getName());
        model.put("ccList", new ArrayList<String>());
        model.put("bccList", new ArrayList<String>());
        model.put("name", name);
        model.put("travelUrl", tripUrl+travelId);
        model.put("countries", countries);
        boolean result = mailService.sendEmail("emailTemplate.jsp", model);
        if (result)
           return new ResponseEntity("Email was sent", HttpStatus.OK);
        else return new ResponseEntity("Error!", HttpStatus.METHOD_FAILURE);
    }

}
