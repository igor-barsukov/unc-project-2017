package controllers;

import models.PostOfTravel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.PostOfTravelService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class PostOfTravelController {

    @Autowired
    private PostOfTravelService postOfTravelService;

    @GetMapping(path = "/postOfTravels")
    public List getPostOfTravels() {
        return postOfTravelService.getAll();
    }

    @GetMapping("/postOfTravels/{id}")
    public ResponseEntity getPostOfTravel(@PathVariable("id") Integer id) {
        PostOfTravel postOfTravel = postOfTravelService.get(id);
        if (postOfTravel == null) {
            return new ResponseEntity("No PostOfTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(postOfTravel, HttpStatus.OK);
    }

    @PostMapping(value = "/postOfTravels")
    public ResponseEntity createPostOfTravel(@RequestBody PostOfTravel postOfTravel) {

        postOfTravelService.addOrUpdate(postOfTravel);

        return new ResponseEntity(postOfTravel, HttpStatus.OK);
    }

    @DeleteMapping("/postOfTravels/{id}")
    public ResponseEntity deletePostOfTravel(@PathVariable Integer id) {

        if ( postOfTravelService.get(id)== null) {
            return new ResponseEntity("No PostOfTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }
        postOfTravelService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/postOfTravels/{id}")
    public ResponseEntity updatePostOfTravel(@PathVariable Integer id, @RequestBody PostOfTravel postOfTravel) {

        postOfTravel = postOfTravelService.addOrUpdate(postOfTravel);

        if ( postOfTravel==null) {
            return new ResponseEntity("No PostOfTravel found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(postOfTravel, HttpStatus.OK);
    }

}
