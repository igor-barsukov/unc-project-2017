package controllers;


import models.ActivityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.ActivityTypeService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */@RestController
public class ActivityTypeController {

    @Autowired
    private ActivityTypeService activityTypeService;

    @GetMapping(path = "/activityTypes")
    public List getActivityTypes() {
        return activityTypeService.getAll();
    }

    @GetMapping("/activityTypes/{id}")
    public ResponseEntity getActivityType(@PathVariable("id") Integer id) {
        ActivityType activityType = activityTypeService.get(id);
        if (activityType == null) {
            return new ResponseEntity("No ActivityType found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(activityType, HttpStatus.OK);
    }

    @PostMapping(value = "/activityTypes")
    public ResponseEntity createActivityType(@RequestBody ActivityType activityType) {

        activityTypeService.addOrUpdate(activityType);

        return new ResponseEntity(activityType, HttpStatus.OK);
    }

    @DeleteMapping("/activityTypes/{id}")
    public ResponseEntity deleteActivityType(@PathVariable Integer id) {

        if ( activityTypeService.get(id)== null) {
            return new ResponseEntity("No ActivityType found for ID " + id, HttpStatus.NOT_FOUND);
        }
        activityTypeService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/activityTypes/{id}")
    public ResponseEntity updateActivityType(@PathVariable Integer id, @RequestBody ActivityType activityType) {

        activityType = activityTypeService.addOrUpdate(activityType);

        if ( activityType==null) {
            return new ResponseEntity("No ActivityType found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(activityType, HttpStatus.OK);
    }

}

