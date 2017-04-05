package controllers;

import models.Message;
import models.Plan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.MessageService;
import services.PlanService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping(path = "/messages")
    public List getMessages() {
        return messageService.getAll();
    }

    @GetMapping("/messages/{id}")
    public ResponseEntity getMessage(@PathVariable("id") Integer id) {
        Message message = messageService.get(id);
        if (message == null) {
            return new ResponseEntity("No Message found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(message, HttpStatus.OK);
    }

    @PostMapping(value = "/messages")
    public ResponseEntity createMessage(@RequestBody Message message) {

        messageService.addOrUpdate(message);

        return new ResponseEntity(message, HttpStatus.OK);
    }

    @DeleteMapping("/messages/{id}")
    public ResponseEntity deleteMessage(@PathVariable Integer id) {

        if (messageService.get(id) == null) {
            return new ResponseEntity("No Message found for ID " + id, HttpStatus.NOT_FOUND);
        }
        messageService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/messages/{id}")
    public ResponseEntity updateMessage(@PathVariable Integer id, @RequestBody Message message) {

        message = messageService.addOrUpdate(message);

        if (message == null) {
            return new ResponseEntity("No Message found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(message, HttpStatus.OK);
    }

}