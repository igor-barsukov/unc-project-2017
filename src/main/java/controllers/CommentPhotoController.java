package controllers;

import models.CommentPhoto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.CommentPhotoService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */@RestController
public class CommentPhotoController {

    @Autowired
    private CommentPhotoService commentPhotoService;

    @GetMapping(path = "/commentPhotos")
    public List getCommentPhotos() {
        return commentPhotoService.getAll();
    }

    @GetMapping("/commentPhotos/{id}")
    public ResponseEntity getCommentPhoto(@PathVariable("id") Integer id) {
        CommentPhoto commentPhoto = commentPhotoService.get(id);
        if (commentPhoto == null) {
            return new ResponseEntity("No CommentPhoto found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(commentPhoto, HttpStatus.OK);
    }

    @PostMapping(value = "/commentPhotos")
    public ResponseEntity createCommentPhoto(@RequestBody CommentPhoto commentPhoto) {

        commentPhotoService.addOrUpdate(commentPhoto);

        return new ResponseEntity(commentPhoto, HttpStatus.OK);
    }

    @DeleteMapping("/commentPhotos/{id}")
    public ResponseEntity deleteCommentPhoto(@PathVariable Integer id) {

        if ( commentPhotoService.get(id)== null) {
            return new ResponseEntity("No CommentPhoto found for ID " + id, HttpStatus.NOT_FOUND);
        }
        commentPhotoService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/commentPhotos/{id}")
    public ResponseEntity updateCommentPhoto(@PathVariable Integer id, @RequestBody CommentPhoto commentPhoto) {

        commentPhoto = commentPhotoService.addOrUpdate(commentPhoto);

        if ( commentPhoto==null) {
            return new ResponseEntity("No CommentPhoto found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(commentPhoto, HttpStatus.OK);
    }

}