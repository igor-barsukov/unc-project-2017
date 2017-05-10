package controllers;

/**
 * Created by acer-pc on 15.04.2017.
 */

import models.Activity;
import models.Travel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.ActivityService;
import services.TravelService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class ActivityController {

    @Autowired
    private ActivityService activityService;
    @Autowired
    private TravelService travelService;

    @GetMapping(path = "/activities")
    public List getActivity() {
        return activityService.getAll();
    }

    @GetMapping("/activities/{id}")
    public ResponseEntity getActivity(@PathVariable("id") Integer id) {
        Activity activity = activityService.get(id);
        if (activity == null) {
            return new ResponseEntity("No Activity found for ID " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(activity, HttpStatus.OK);
    }

    @GetMapping("/activities/travel/{id}")
    public ResponseEntity getActivitiesByTravelId(@PathVariable("id") Integer id) {
        List<Activity> activities = activityService.getActivitiesByTravelId(id);
        if (activities == null) {
            return new ResponseEntity("No Activity found for travel with  ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(activities, HttpStatus.OK);
    }

    @PostMapping(value = "/activities")
    public ResponseEntity createActivity(@RequestBody Activity activity) {
        activityService.addOrUpdate(activity);
        return new ResponseEntity(activity, HttpStatus.OK);
    }

    @PostMapping(value = "/activities/travel/{id}")
    public ResponseEntity createActivityByTravelId(@RequestBody Activity activity, @PathVariable("id") Integer id) {
        activity.setTravel(travelService.get(id));
        activityService.addOrUpdate(activity);
        return new ResponseEntity(activity, HttpStatus.OK);
    }

    @DeleteMapping("/activities/{id}")
    public ResponseEntity deleteActivity(@PathVariable Integer id) {

        if ( activityService.get(id)== null) {
            return new ResponseEntity("No Activity found for ID " + id, HttpStatus.NOT_FOUND);
        }
        activityService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/activities/{id}")
    public ResponseEntity updateActivity(@PathVariable Integer id, @RequestBody Activity activity) {

        activity = activityService.addOrUpdate(activity);

        if ( activity ==null) {
            return new ResponseEntity("No Activity found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(activity, HttpStatus.OK);
    }

}