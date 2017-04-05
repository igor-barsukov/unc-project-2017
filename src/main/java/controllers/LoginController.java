package controllers;

import models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.dao.SaltSource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import services.UserService;

import javax.crypto.interfaces.PBEKey;

/**
 * Created by qwerty on 27.03.2017.
 */
@Controller
public class LoginController {

    @Autowired
    UserService userService;

    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;

    @RequestMapping(value = {"/login" }, method = RequestMethod.GET)
    public String homePage(ModelMap model) {
        return "login";
    }

    @RequestMapping(value = "/registration", method = RequestMethod.GET)
    public String registration(Model model) {
        model.addAttribute("userForm", new User());

        return "registration";
    }

    @RequestMapping(value = {"/welcome"}, method = RequestMethod.GET)
    public String welcome(Model model) {
        return "welcome";
    }

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String admin(Model model) {
        return "admin";
    }

    @RequestMapping(value = "/userPage", method = RequestMethod.GET)
    public String userPage(Model model) {
        return "userPage";
    }

    @RequestMapping(value = "/anonim", method = RequestMethod.GET)
    public String anonim(Model model) {
        return "anonim";
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public String registration(@ModelAttribute("userForm") User userForm, Model model) {

        userForm.setPassword(bcryptEncoder.encode(userForm.getPassword()));
        userService.addOrUpdate(userForm);

        return "redirect:/welcome";
    }


}
