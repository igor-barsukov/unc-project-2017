package controllers;

/**
 * Created by acer-pc on 07.04.2017.
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.UserService;

import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

@RestController
public class AuthorizationController {
    @Autowired
    private UserService userService;

    @PostMapping(value = "/users/login/{password}/{email:.+}")
    public ResponseEntity login(@PathVariable("email") String email, @PathVariable("password") String password) {
            if(userService.getByCredentials(email, password)==null)
            return new ResponseEntity("No User found for such credentials", HttpStatus.NOT_FOUND);
        else return new ResponseEntity(userService.getByEmail(email), HttpStatus.OK);
    }

}
