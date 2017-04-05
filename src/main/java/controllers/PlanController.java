package controllers;

import models.Plan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.PlanService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class PlanController {

    @Autowired
    private PlanService planService;

    @GetMapping(path = "/plans")
    public List getPlans() {
        return planService.getAll();
    }

    @GetMapping("/plans/{id}")
    public ResponseEntity getPlan(@PathVariable("id") Integer id) {
        Plan plan = planService.get(id);
        if (plan == null) {
            return new ResponseEntity("No Plan found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(plan, HttpStatus.OK);
    }

    @PostMapping(value = "/plans")
    public ResponseEntity createPlan(@RequestBody Plan plan) {

        planService.addOrUpdate(plan);

        return new ResponseEntity(plan, HttpStatus.OK);
    }

    @DeleteMapping("/plans/{id}")
    public ResponseEntity deletePlan(@PathVariable Integer id) {

        if ( planService.get(id)== null) {
            return new ResponseEntity("No Plan found for ID " + id, HttpStatus.NOT_FOUND);
        }
        planService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/plans/{id}")
    public ResponseEntity updatePlan(@PathVariable Integer id, @RequestBody Plan plan) {

        plan = planService.addOrUpdate(plan);

        if ( plan==null) {
            return new ResponseEntity("No Plan found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(plan, HttpStatus.OK);
    }

}
