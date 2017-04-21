package controllers;

import models.Travel;
import models.User;
import models.UserToTravel;
import models.helpers.UserToTravelPK;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.UserToTravelService;

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

    @GetMapping("/userToTravels/usersByTravelId/{id}")
    public ResponseEntity getUsersByTravelId(@PathVariable("id") Integer id) {
        List<User> users = userToTravelService.getUsersByTravelId(id);
        if (users.isEmpty()) {
            return new ResponseEntity("No Users found for Travel with ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(users, HttpStatus.OK);
    }

    @GetMapping("/userToTravels/travelsByUserId/{id}")
    public ResponseEntity getTravelsByUserId(@PathVariable("id") Integer id) {
        List<Travel> travels = userToTravelService.getTravelsByUserId(id);
        if (travels.isEmpty()) {
            return new ResponseEntity("No Travels found for user with ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(travels, HttpStatus.OK);
    }

    @PostMapping(value = "/userToTravels")
    public ResponseEntity createUserToTravel(@RequestBody UserToTravel userToTravel) {

        userToTravelService.addOrUpdate(userToTravel);

        return new ResponseEntity(userToTravel, HttpStatus.OK);
    }

    @DeleteMapping("/userToTravels/{id}")
    public ResponseEntity deleteUserToTravel(@PathVariable UserToTravelPK id) {

        if (userToTravelService.get(id) == null) {
            return new ResponseEntity("No UserToTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }
        userToTravelService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/userToTravels/{id}")
    public ResponseEntity updateUserToTravel(@PathVariable UserToTravelPK id, @RequestBody UserToTravel userToTravel) {

        userToTravel = userToTravelService.addOrUpdate(userToTravel);

        if (userToTravel == null) {
            return new ResponseEntity("No UserToTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(userToTravel, HttpStatus.OK);
    }

}
