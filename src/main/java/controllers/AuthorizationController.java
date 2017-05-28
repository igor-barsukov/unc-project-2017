package controllers;

/**
 * Created by acer-pc on 07.04.2017.
 */
import models.User;
import models.helpers.Credentials;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import services.UserService;

import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

@RestController
public class AuthorizationController {


    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;

    @PostMapping(value = "/users/login")
    public ResponseEntity createUser(@RequestBody Credentials credentials) {
        User user = userService.getByEmail(credentials.getEmail());
//        System.out.println(bcryptEncoder.matches(credentials.getPassword(), user.getPassword()));
        if(bcryptEncoder.matches(credentials.getPassword(), user.getPassword())){
//        if(userService.getByCredentials(credentials.getEmail(), credentials.getPassword())==null) {
            //  @PostMapping(value = "/users/login/{password}/{email:.+}")
            // public ResponseEntity login(@PathVariable("email") String email, @PathVariable("password") String password) {
            //   if(userService.getByCredentials(email, password)==null)
            return new ResponseEntity(userService.getByEmail(credentials.getEmail()), HttpStatus.OK);
        }
        else {
            return new ResponseEntity("No User found for such credentials", HttpStatus.NOT_FOUND);
        }
    }

}
