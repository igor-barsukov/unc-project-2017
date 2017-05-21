package controllers;

import models.*;
import models.helpers.UserToTravelPK;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.*;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class TravelController {

    @Autowired
    private TravelService travelService;
    @Autowired
    private UserToTravelService userToTravelService;
    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;
    @Autowired
    private CountryService countryService;

    @GetMapping(path = "/travels")
    public List getTravels() {
        return travelService.getAll();
    }

    @GetMapping("/travels/{id}")
    public ResponseEntity getTravel(@PathVariable("id") Integer id) {
        Travel travel = travelService.get(id);
        if (travel == null) {
            return new ResponseEntity("No Travel found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(travel, HttpStatus.OK);
    }

    @GetMapping("/travels/country={id}")
    public ResponseEntity getTravelByCountry(@PathVariable("id") Integer id) {
        List<Travel> travels = travelService.getByCountryId(id);
        if (travels == null) {
            return new ResponseEntity("No Travel found for country with ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(travels, HttpStatus.OK);
    }
       @PostMapping(value = "/newtravels")
       public ResponseEntity createTravel(@RequestBody Travel travel) {
           travelService.addOrUpdate(travel);
           return new ResponseEntity(travel, HttpStatus.OK);
       }

    @PostMapping(value = "/travels")
    public ResponseEntity createTravelByUserId(@RequestBody Travel travel, @RequestParam("userId") Integer id) {

        UserToTravel userToTravel=new UserToTravel();
        User user=userService.get(id);
        if (user==null) {
            return new ResponseEntity("No user found for ID " + id, HttpStatus.NOT_FOUND);
        }

        Role role=roleService.getByName("admin");
        if (role==null){
            role=new Role();
            role.setName("admin");
            roleService.addOrUpdate(role);
        }
        travelService.addOrUpdate(travel);

        userToTravel.setUser(user);
        userToTravel.setTravel(travel);
        userToTravel.setRole(role);
        userToTravelService.addOrUpdate(userToTravel);
        return new ResponseEntity(travel, HttpStatus.OK);
    }

    @DeleteMapping("/travels/{id}")
    public ResponseEntity deleteTravel(@PathVariable Integer id) {

        if ( travelService.get(id)== null) {
            return new ResponseEntity("No Travel found for ID " + id, HttpStatus.NOT_FOUND);
        }
        travelService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/travels/{id}")
    public ResponseEntity updateTravel(@PathVariable Integer id, @RequestBody Travel travel) {

        travel = travelService.addOrUpdate(travel);

        if ( travel==null) {
            return new ResponseEntity("No Travel found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(travel, HttpStatus.OK);
    }
    @GetMapping("/travels/addCountry")
    public ResponseEntity addCountryToTrip(@RequestParam("travelId") Integer travelId,@RequestParam("countryId") Integer countryId) {
        Travel travels = travelService.get(travelId);
        Country country = countryService.get(countryId);
        if (travels == null) {
            return new ResponseEntity("No Travel found for country with ID " + travelId, HttpStatus.NOT_FOUND);
        }
        if (country == null) {
            return new ResponseEntity("No country found for country with ID " + countryId, HttpStatus.NOT_FOUND);
        }
        country.getTravels().add(travels);
        travels.getCountries().add(country);
        travelService.addOrUpdate(travels);
        countryService.addOrUpdate(country);

        return new ResponseEntity(travels, HttpStatus.OK);
    }
}
