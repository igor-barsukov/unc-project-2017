package controllers;

import models.Album;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.AlbumService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */@RestController
public class AlbumController {

    @Autowired
    private AlbumService albumService;

    @GetMapping(path = "/albums")
    public List getAlbums() {
        return albumService.getAll();
    }

    @GetMapping("/albums/{id}")
    public ResponseEntity getAlbum(@PathVariable("id") Integer id) {
        Album album = albumService.get(id);
        if (album == null) {
            return new ResponseEntity("No Album found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(album, HttpStatus.OK);
    }

    @PostMapping(value = "/albums")
    public ResponseEntity createAlbum(@RequestBody Album album) {

        albumService.addOrUpdate(album);

        return new ResponseEntity(album, HttpStatus.OK);
    }

    @DeleteMapping("/albums/{id}")
    public ResponseEntity deleteAlbum(@PathVariable Integer id) {

        if ( albumService.get(id)== null) {
            return new ResponseEntity("No Album found for ID " + id, HttpStatus.NOT_FOUND);
        }
        albumService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/albums/{id}")
    public ResponseEntity updateAlbum(@PathVariable Integer id, @RequestBody Album album) {

        album = albumService.addOrUpdate(album);

        if ( album==null) {
            return new ResponseEntity("No Album found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(album, HttpStatus.OK);
    }

}

