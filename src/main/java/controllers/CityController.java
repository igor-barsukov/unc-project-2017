package controllers;

import models.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.CityService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */@RestController
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping(path = "/cities")
    public List getCitys() {
        return cityService.getAll();
    }

    @GetMapping("/cities/{id}")
    public ResponseEntity getCity(@PathVariable("id") Integer id) {
        City city = cityService.get(id);
        if (city == null) {
            return new ResponseEntity("No City found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(city, HttpStatus.OK);
    }
    @GetMapping("/cities/state/{id}")
    public List getCityByStateId(@PathVariable("id") Integer stateId) {
        return cityService.getByStateId(stateId);
    }

    @PostMapping(value = "/cities")
    public ResponseEntity createCity(@RequestBody City city) {

        cityService.addOrUpdate(city);

        return new ResponseEntity(city, HttpStatus.OK);
    }

    @DeleteMapping("/cities/{id}")
    public ResponseEntity deleteCity(@PathVariable Integer id) {

        if ( cityService.get(id)== null) {
            return new ResponseEntity("No City found for ID " + id, HttpStatus.NOT_FOUND);
        }
        cityService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/cities/{id}")
    public ResponseEntity updateCity(@PathVariable Integer id, @RequestBody City city) {

        city = cityService.addOrUpdate(city);

        if ( city==null) {
            return new ResponseEntity("No City found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(city, HttpStatus.OK);
    }

}
