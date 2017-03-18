package controllers;

import models.Gender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.GenderService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class GenderController {

    @Autowired
    private GenderService genderService;

    @GetMapping(path = "/genders")
    public List getGenders() {
        return genderService.getAll();
    }

    @GetMapping("/genders/{id}")
    public ResponseEntity getGender(@PathVariable("id") Integer id) {
        Gender gender = genderService.get(id);
        if (gender == null) {
            return new ResponseEntity("No Gender found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(gender, HttpStatus.OK);
    }

    @PostMapping(value = "/genders")
    public ResponseEntity createGender(@RequestBody Gender gender) {

        genderService.addOrUpdate(gender);

        return new ResponseEntity(gender, HttpStatus.OK);
    }

    @DeleteMapping("/genders/{id}")
    public ResponseEntity deleteGender(@PathVariable Integer id) {

        if ( genderService.get(id)== null) {
            return new ResponseEntity("No Gender found for ID " + id, HttpStatus.NOT_FOUND);
        }
        genderService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/genders/{id}")
    public ResponseEntity updateGender(@PathVariable Integer id, @RequestBody Gender gender) {

        gender = genderService.addOrUpdate(gender);

        if ( gender==null) {
            return new ResponseEntity("No Gender found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(gender, HttpStatus.OK);
    }

}