package controllers;

import models.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.RoleService;

import java.util.List;

/**
 * Created by acer-pc on 18.03.2017.
 */
@RestController
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping(path = "/roles")
    public List getRoles() {
        return roleService.getAll();
    }

    @GetMapping("/roles/{id}")
    public ResponseEntity getRole(@PathVariable("id") Integer id) {
        Role role = roleService.get(id);
        if (role == null) {
            return new ResponseEntity("No Role found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(role, HttpStatus.OK);
    }

    @PostMapping(value = "/roles")
    public ResponseEntity createRole(@RequestBody Role role) {

        roleService.addOrUpdate(role);

        return new ResponseEntity(role, HttpStatus.OK);
    }

    @DeleteMapping("/roles/{id}")
    public ResponseEntity deleteRole(@PathVariable Integer id) {

        if ( roleService.get(id)== null) {
            return new ResponseEntity("No Role found for ID " + id, HttpStatus.NOT_FOUND);
        }
        roleService.delete(id);
        return new ResponseEntity(id, HttpStatus.OK);

    }

    @PutMapping("/roles/{id}")
    public ResponseEntity updateRole(@PathVariable Integer id, @RequestBody Role role) {

        role = roleService.addOrUpdate(role);

        if ( role==null) {
            return new ResponseEntity("No Role found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(role, HttpStatus.OK);
    }

}
