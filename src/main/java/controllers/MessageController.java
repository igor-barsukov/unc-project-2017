package controllers;

import models.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.MessageService;

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

    @GetMapping("/messages/sender={id}")
    public ResponseEntity getMessageBySender(@PathVariable("id") Integer id) {
        List<Message> message = messageService.getAllBySenderId(id);
        if (message == null) {
            return new ResponseEntity("No Message found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(message, HttpStatus.OK);
    }

    @GetMapping("/messages/recipient={id}")
    public ResponseEntity getMessageByRecipient(@PathVariable("id") Integer id) {
        List<Message> message = messageService.getAllByRecipientId(id);
        if (message == null) {
            return new ResponseEntity("No Message found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(message, HttpStatus.OK);
    }

    @GetMapping("/messages/chat")
    public ResponseEntity getChatBetweenTwoUsers(@RequestParam("user1") Integer user1, @RequestParam("user2") Integer user2) {
        List<Message> message = messageService.getChatOfTwoUsers(user1, user2);
        if (message == null) {
            return new ResponseEntity("No Message found for these users ",  HttpStatus.NOT_FOUND);
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