package controllers;

/**
 * Created by acer-pc on 15.04.2017.
 */

import models.Activity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.ActivityService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class ActivityController {

    @Autowired
    private ActivityService accommodationService;

    @GetMapping(path = "/activity")
    public List getActivity() {
        return accommodationService.getAll();
    }

    @GetMapping("/activity/{id}")
    public ResponseEntity getActivity(@PathVariable("id") Integer id) {
        Activity activity = accommodationService.get(id);
        if (activity == null) {
            return new ResponseEntity("No Activity found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(activity, HttpStatus.OK);
    }

    @PostMapping(value = "/activity")
    public ResponseEntity createActivity(@RequestBody Activity activity) {

        accommodationService.addOrUpdate(activity);

        return new ResponseEntity(activity, HttpStatus.OK);
    }

    @DeleteMapping("/activity/{id}")
    public ResponseEntity deleteActivity(@PathVariable Integer id) {

        if ( accommodationService.get(id)== null) {
            return new ResponseEntity("No Activity found for ID " + id, HttpStatus.NOT_FOUND);
        }
        accommodationService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/activity/{id}")
    public ResponseEntity updateActivity(@PathVariable Integer id, @RequestBody Activity activity) {

        activity = accommodationService.addOrUpdate(activity);

        if ( activity ==null) {
            return new ResponseEntity("No Activity found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(activity, HttpStatus.OK);
    }

}