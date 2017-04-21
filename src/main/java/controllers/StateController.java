package controllers;

import models.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.StateService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class StateController {

    @Autowired
    private StateService stateService;

    @GetMapping(path = "/states")
    public List getStates() {
        return stateService.getAll();
    }

    @GetMapping("/states/{id}")
    public ResponseEntity getState(@PathVariable("id") Integer id) {
        State state = stateService.get(id);
        if (state == null) {
            return new ResponseEntity("No State found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(state, HttpStatus.OK);
    }

    @GetMapping("/states/country/{id}")
    public List getStateByCountryId(@PathVariable("id") Integer countryId) {
      return  stateService.getByCountryId(countryId);
    }
    @PostMapping(value = "/states")
    public ResponseEntity createState(@RequestBody State state) {

        stateService.addOrUpdate(state);

        return new ResponseEntity(state, HttpStatus.OK);
    }

    @DeleteMapping("/states/{id}")
    public ResponseEntity deleteState(@PathVariable Integer id) {

        if ( stateService.get(id)== null) {
            return new ResponseEntity("No State found for ID " + id, HttpStatus.NOT_FOUND);
        }
        stateService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/states/{id}")
    public ResponseEntity updateState(@PathVariable Integer id, @RequestBody State state) {

        state = stateService.addOrUpdate(state);

        if ( state==null) {
            return new ResponseEntity("No State found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(state, HttpStatus.OK);
    }



}
