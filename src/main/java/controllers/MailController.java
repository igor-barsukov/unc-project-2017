package controllers;

import models.City;
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
    static String path="http://localhost:8181";
    static String tripUrl=path+"/#/trip-planning/";
    static String registrationUrl=path+"#/registered";
    static String confirmUrl=path+"/sendEmail/confirm/";

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
       if (travel.getCities()!=null || travel.getCities().size()>0 ){
           countries="to ";
           for (City city: travel.getCities())
               countries+= city.getState().getCountry().getName()+ ", ";
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

    public Map<String, Object> setMap(String text, User user){
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("from", ourEmailName);
        model.put("subject", subject);
        model.put("to", user.getEmail());
        model.put("ccList", new ArrayList<String>());
        model.put("bccList", new ArrayList<String>());
        model.put("text",text );
        return model;
    }

    @GetMapping("/sendEmail/newUser={userId}")
    public ResponseEntity sendAfterRegistration(@PathVariable("userId") Integer id){
        User user=userService.get(id);

        if (user==null) {
            return new ResponseEntity("User was not found!", HttpStatus.NOT_FOUND);
        }
        String text=user.getFirstName()+", welcome to JourneyJoins!";
        Map<String, Object> model=setMap(text, user);
        boolean result = mailService.sendEmail("emailInfo.jsp", model);
        if (result)
            return new ResponseEntity("Email was" +
                    "  sent", HttpStatus.OK);
        else return new ResponseEntity("Error!", HttpStatus.METHOD_FAILURE);

    }

    @GetMapping("/sendEmail/user={userId}/{newEmail:.+}")
    public ResponseEntity sendAfterRequestToChangeEmail(@PathVariable("userId") Integer id,@PathVariable("newEmail") String newEmail){
        User user=userService.get(id);

        if (user==null) {
            return new ResponseEntity("User was not found!", HttpStatus.NOT_FOUND);
        }
        String text=user.getFirstName()+", your email is going to be changed to "+newEmail;

        text+=". Click the button to confirm it!";
        Map<String, Object> model=setMap(text, user);
        model.put("confirmUrl", confirmUrl+"/user="+user.getId()+"/"+newEmail);
        boolean result = mailService.sendEmail("emailConfirm.jsp", model);
        if (result)
            return new ResponseEntity("Email was" +
                    "  sent", HttpStatus.OK);
        else return new ResponseEntity("Error!", HttpStatus.METHOD_FAILURE);
    }

    @GetMapping("/sendEmail/confirm/user={userId}/{newEmail:.+}")
    public ResponseEntity sendAfterChange(@PathVariable("userId") Integer id,@PathVariable("newEmail") String newEmail){
        User user=userService.get(id);

        if (user==null) {
            return new ResponseEntity("User was not found!", HttpStatus.NOT_FOUND);
        }

        String text="Email was changed";
        Map<String, Object> model=setMap(text, user);
        user.setEmail(newEmail);
        userService.addOrUpdate(user);
        boolean result = mailService.sendEmail("emailInfo.jsp", model);
        if (result)
            return new ResponseEntity("Email was" +
                    "  sent", HttpStatus.OK);
        else return new ResponseEntity("Error!", HttpStatus.METHOD_FAILURE);
    }
    @GetMapping("/sendEmail/passwordChanged/user={userId}")
    public ResponseEntity sendAfterPasswordChange(@PathVariable("userId") Integer id){
        User user=userService.get(id);

        if (user==null) {
            return new ResponseEntity("User was not found!", HttpStatus.NOT_FOUND);
        }
        String text="Password was changed";
        Map<String, Object> model=setMap(text, user);
        boolean result = mailService.sendEmail("emailInfo.jsp", model);
        if (result)
            return new ResponseEntity("Email was" +
                    "  sent", HttpStatus.OK);
        else return new ResponseEntity("Error!", HttpStatus.METHOD_FAILURE);

    }


}
