package controllers;

/**
 * Created by acer-pc on 15.04.2017.
 */

import models.Movement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.MovementService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */@RestController
public class MovementController {

    @Autowired
    private MovementService movementService;

    @GetMapping(path = "/movements")
    public List getMovements() {
        return movementService.getAll();
    }

    @GetMapping("/movements/{id}")
    public ResponseEntity getMovement(@PathVariable("id") Integer id) {
        Movement movement = movementService.get(id);
        if (movement == null) {
            return new ResponseEntity("No Movement found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(movement, HttpStatus.OK);
    }

    @PostMapping(value = "/movements")
    public ResponseEntity createMovement(@RequestBody Movement movement) {

        movementService.addOrUpdate(movement);

        return new ResponseEntity(movement, HttpStatus.OK);
    }

    @DeleteMapping("/movements/{id}")
    public ResponseEntity deleteMovement(@PathVariable Integer id) {

        if ( movementService.get(id)== null) {
            return new ResponseEntity("No Movement found for ID " + id, HttpStatus.NOT_FOUND);
        }
        movementService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/movements/{id}")
    public ResponseEntity updateMovement(@PathVariable Integer id, @RequestBody Movement movement) {

        movement = movementService.addOrUpdate(movement);

        if ( movement==null) {
            return new ResponseEntity("No Movement found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(movement, HttpStatus.OK);
    }

}