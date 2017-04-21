package controllers;

/**
 * Created by acer-pc on 15.04.2017.
 */

import models.Transport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.TransportService;

import java.util.List;

@RestController
public class TransportController {

    @Autowired
    private TransportService transportService;

    @GetMapping(path = "/transports")
    public List getTransports() {
        return transportService.getAll();
    }

    @GetMapping("/transports/{id}")
    public ResponseEntity getTransport(@PathVariable("id") Integer id) {
        Transport transport = transportService.get(id);
        if (transport == null) {
            return new ResponseEntity("No Transport found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(transport, HttpStatus.OK);
    }

    @PostMapping(value = "/transports")
    public ResponseEntity createTransport(@RequestBody Transport transport) {

        transportService.addOrUpdate(transport);

        return new ResponseEntity(transport, HttpStatus.OK);
    }

    @DeleteMapping("/transports/{id}")
    public ResponseEntity deleteTransport(@PathVariable Integer id) {

        if ( transportService.get(id)== null) {
            return new ResponseEntity("No Transport found for ID " + id, HttpStatus.NOT_FOUND);
        }
        transportService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/transports/{id}")
    public ResponseEntity updateTransport(@PathVariable Integer id, @RequestBody Transport transport) {

        transport = transportService.addOrUpdate(transport);

        if ( transport==null) {
            return new ResponseEntity("No Transport found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(transport, HttpStatus.OK);
    }

}