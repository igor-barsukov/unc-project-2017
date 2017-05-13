package controllers;

import models.Travel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.TravelService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class TravelController {

    @Autowired
    private TravelService travelService;

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
    @PostMapping(value = "/travels")
    public ResponseEntity createTravel(@RequestBody Travel travel) {

        travelService.addOrUpdate(travel);

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

}
