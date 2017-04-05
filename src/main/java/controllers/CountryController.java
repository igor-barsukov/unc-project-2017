package controllers;

import models.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.CountryService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping(path = "/countries")
    public List getCountrys() {
        return countryService.getAll();
    }

    @GetMapping("/countries/{id}")
    public ResponseEntity getCountry(@PathVariable("id") Integer id) {
        Country country = countryService.get(id);
        if (country == null) {
            return new ResponseEntity("No Country found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(country, HttpStatus.OK);
    }

    @PostMapping(value = "/countries")
    public ResponseEntity createCountry(@RequestBody Country country) {

        countryService.addOrUpdate(country);

        return new ResponseEntity(country, HttpStatus.OK);
    }

    @DeleteMapping("/countries/{id}")
    public ResponseEntity deleteCountry(@PathVariable Integer id) {

        if ( countryService.get(id)== null) {
            return new ResponseEntity("No Country found for ID " + id, HttpStatus.NOT_FOUND);
        }
        countryService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/countries/{id}")
    public ResponseEntity updateCountry(@PathVariable Integer id, @RequestBody Country country) {

        country = countryService.addOrUpdate(country);

        if ( country==null) {
            return new ResponseEntity("No Country found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(country, HttpStatus.OK);
    }

}