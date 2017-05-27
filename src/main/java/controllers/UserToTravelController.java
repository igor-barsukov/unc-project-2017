package controllers;

import models.Role;
import models.Travel;
import models.User;
import models.UserToTravel;
import models.helpers.UserToTravelPK;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.RoleService;
import services.TravelService;
import services.UserService;
import services.UserToTravelService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class UserToTravelController {

    @Autowired
    private UserService userService;
    @Autowired
    private TravelService travelService;
    @Autowired
    private UserToTravelService userToTravelService;
    @Autowired
    private RoleService roleService;

    @GetMapping(path = "/userToTravels")
    public List getUserToTravels() {
        return userToTravelService.getAll();
    }

    @GetMapping("/userToTravels/user={userId}/travel={travelId}")
    public ResponseEntity getUserToTravel(@PathVariable("userId") Integer userId, @PathVariable("travelId") Integer travelId) {
        User user=userService.get(userId);
        Travel travel=travelService.get(travelId);

        if (user == null || travel==null) {
            return new ResponseEntity("No UserToTravel found", HttpStatus.NOT_FOUND);
        }
        UserToTravel userToTravel = userToTravelService.get(new UserToTravelPK(user, travel));

        if (userToTravel==null)
            return new ResponseEntity("No UserToTravel found", HttpStatus.NOT_FOUND);
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
    @GetMapping("/userToTravels/usersToTravelByTravelId/{id}")
    public ResponseEntity getUsersToTravelByTravelId(@PathVariable("id") Integer id) {
        List<UserToTravel> users = userToTravelService.getUserToTravelByTravelId(id);
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
    public ResponseEntity createUserToTravel(@RequestParam("travelId") Integer travelId,@RequestParam("userId") Integer userId ) {

        User user=userService.get(userId);
        if (user==null ) return new ResponseEntity("No user found", HttpStatus.NOT_FOUND);
        Travel travel=travelService.get(travelId);

        if (travel==null ) return new ResponseEntity("No travel found", HttpStatus.NOT_FOUND);
        Role role =roleService.getByName("user");
        UserToTravel userToTravel= userToTravelService.get(new UserToTravelPK(user,travel));
        if (userToTravel!=null) return new ResponseEntity("UserToTravel already exists", HttpStatus.CONFLICT);
        if (role==null){
            role=new Role();
            role.setName("user");
            roleService.addOrUpdate(role);
        }
        userToTravel=new UserToTravel(user, travel, role);
        userToTravelService.addOrUpdate(userToTravel);
        return new ResponseEntity(userToTravel, HttpStatus.OK);
    }

}
