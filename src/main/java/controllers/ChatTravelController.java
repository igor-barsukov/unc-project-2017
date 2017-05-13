package controllers;

import models.ChatTravel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.ChatTravelService;
import java.util.List;
/**
 * Created by acer-pc on 18.03.2017.
 */@RestController
public class ChatTravelController {

    @Autowired
    private ChatTravelService chatTravelService;

    @GetMapping(path = "/chatTravels")
    public List getChatTravels() {
        return chatTravelService.getAll();
    }

    @GetMapping("/chatTravels/{id}")
    public ResponseEntity getChatTravel(@PathVariable("id") Integer id) {
        ChatTravel chatTravel = chatTravelService.get(id);
        if (chatTravel == null) {
            return new ResponseEntity("No ChatTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(chatTravel, HttpStatus.OK);
    }
    @GetMapping("/chatTravels/user={id}")
    public ResponseEntity getChatTravelByUser(@PathVariable("id") Integer id) {
        List<ChatTravel> chatTravel = chatTravelService.getAllByUserId(id);
        if (chatTravel == null) {
            return new ResponseEntity("No ChatTravel found for user ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(chatTravel, HttpStatus.OK);
    }

    @GetMapping("/chatTravels/travel={id}")
    public ResponseEntity getChatTravelByTravel(@PathVariable("id") Integer id) {
        List<ChatTravel> chatTravel = chatTravelService.getAllByTravelId(id);
        if (chatTravel == null) {
            return new ResponseEntity("No ChatTravel found for travel with ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(chatTravel, HttpStatus.OK);
    }


    @GetMapping("/chatTravels/get")
    public ResponseEntity getChatTravelByTravelAndUser(@RequestParam("travelId") Integer travelId, @RequestParam("userId") Integer userId) {
        List<ChatTravel> chatTravel = chatTravelService.getByTravelIdAndUserId(travelId, userId);
        if (chatTravel == null) {
            return new ResponseEntity("No ChatTravel found for such params", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(chatTravel, HttpStatus.OK);
    }

    @PostMapping(value = "/chatTravels")
    public ResponseEntity createChatTravel(@RequestBody ChatTravel chatTravel) {

        chatTravelService.addOrUpdate(chatTravel);

        return new ResponseEntity(chatTravel, HttpStatus.OK);
    }

    @DeleteMapping("/chatTravels/{id}")
    public ResponseEntity deleteChatTravel(@PathVariable Integer id) {

        if ( chatTravelService.get(id)== null) {
            return new ResponseEntity("No ChatTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }
        chatTravelService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/chatTravels/{id}")
    public ResponseEntity updateChatTravel(@PathVariable Integer id, @RequestBody ChatTravel chatTravel) {

        chatTravel = chatTravelService.addOrUpdate(chatTravel);

        if ( chatTravel==null) {
            return new ResponseEntity("No ChatTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(chatTravel, HttpStatus.OK);
    }

}
