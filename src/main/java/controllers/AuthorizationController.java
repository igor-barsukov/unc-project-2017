package controllers;

/**
 * Created by acer-pc on 07.04.2017.
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.UserService;

@RestController
public class AuthorizationController {
    @Autowired
    private UserService userService;

    @PostMapping(value = "/users/login")
    public ResponseEntity login(@RequestBody String email, @RequestBody String password) {
            if(userService.getByCredentials(email, password)==null)
            return new ResponseEntity("No User found for such credentials", HttpStatus.NOT_FOUND);
        else return new ResponseEntity(userService.getByEmail(email), HttpStatus.OK);
    }

}
