package controllers;

import models.UserToTravel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.UserToTravelService;
import models.UserToTravelPK;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class UserToTravelController {

    @Autowired
    private UserToTravelService userToTravelService;

    @GetMapping(path = "/userToTravels")
    public List getUserToTravels() {
        return userToTravelService.getAll();
    }

    @GetMapping("/userToTravels/{id}")
    public ResponseEntity getUserToTravel(@PathVariable("id") UserToTravelPK id) {
        UserToTravel userToTravel = userToTravelService.get(id);
        if (userToTravel == null) {
            return new ResponseEntity("No UserToTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(userToTravel, HttpStatus.OK);
    }

    @PostMapping(value = "/userToTravels")
    public ResponseEntity createUserToTravel(@RequestBody UserToTravel userToTravel) {

        userToTravelService.addOrUpdate(userToTravel);

        return new ResponseEntity(userToTravel, HttpStatus.OK);
    }

    @DeleteMapping("/userToTravels/{id}")
    public ResponseEntity deleteUserToTravel(@PathVariable UserToTravelPK id) {

        if ( userToTravelService.get(id)== null) {
            return new ResponseEntity("No UserToTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }
        userToTravelService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/userToTravels/{id}")
    public ResponseEntity updateUserToTravel(@PathVariable UserToTravelPK id, @RequestBody UserToTravel userToTravel) {

        userToTravel = userToTravelService.addOrUpdate(userToTravel);

        if ( userToTravel==null) {
            return new ResponseEntity("No UserToTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(userToTravel, HttpStatus.OK);
    }

}
