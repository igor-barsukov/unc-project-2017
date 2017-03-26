package controllers;

/**
 * Created by acer-pc on 16.03.2017.
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import models.User;
import java.util.List;
import services.UserService;


@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/users")
    public List getUsers() {
        return userService.getAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity getUser(@PathVariable("id") Integer id) {
        User user = userService.get(id);
        if (user == null) {
            return new ResponseEntity("No User found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(user, HttpStatus.OK);
    }

    @GetMapping("/users/getByEmail/{email:.+}")
    public ResponseEntity getUserByEmail(@PathVariable("email") String email) {
        User user = userService.getByEmail(email.trim());
        if (user == null) {
            return new ResponseEntity("No User found for email " + email, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(user, HttpStatus.OK);
    }
    @PostMapping(value = "/users")
    public ResponseEntity createUser(@RequestBody User user) {

        userService.addOrUpdate(user);

        return new ResponseEntity(user, HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity deleteUser(@PathVariable Integer id) {

        if ( userService.get(id)== null) {
            return new ResponseEntity("No User found for ID " + id, HttpStatus.NOT_FOUND);
        }
        userService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/users/{id}")
    public ResponseEntity updateUser(@PathVariable Integer id, @RequestBody User user) {

        user = userService.addOrUpdate(user);

        if ( user==null) {
            return new ResponseEntity("No User found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(user, HttpStatus.OK);
    }

}

