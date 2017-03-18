package controllers;

import models.Photo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.PhotoService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @GetMapping(path = "/photos")
    public List getPhotos() {
        return photoService.getAll();
    }

    @GetMapping("/photos/{id}")
    public ResponseEntity getPhoto(@PathVariable("id") Integer id) {
        Photo photo = photoService.get(id);
        if (photo == null) {
            return new ResponseEntity("No Photo found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(photo, HttpStatus.OK);
    }

    @PostMapping(value = "/photos")
    public ResponseEntity createPhoto(@RequestBody Photo photo) {

        photoService.addOrUpdate(photo);

        return new ResponseEntity(photo, HttpStatus.OK);
    }

    @DeleteMapping("/photos/{id}")
    public ResponseEntity deletePhoto(@PathVariable Integer id) {

        if ( photoService.get(id)== null) {
            return new ResponseEntity("No Photo found for ID " + id, HttpStatus.NOT_FOUND);
        }
        photoService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/photos/{id}")
    public ResponseEntity updatePhoto(@PathVariable Integer id, @RequestBody Photo photo) {

        photo = photoService.addOrUpdate(photo);

        if ( photo==null) {
            return new ResponseEntity("No Photo found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(photo, HttpStatus.OK);
    }

}
