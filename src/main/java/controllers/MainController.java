package controllers;

import models.*;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;
import  java.util.Date;
import  java.util.List;

import java.io.IOException;
import java.text.SimpleDateFormat;

/**
 * Created by qwerty on 04.03.2017.
 */
@Controller("userService")
public class MainController {

    @Autowired
    private UserService userService;
    @Autowired
    private TravelService travelService;
    @Autowired
    private PlanService planService;

    //date
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-M-dd");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
    }
    @RequestMapping(value="/travels")
    public ModelAndView listTravels(ModelAndView model) throws IOException {
        List<Travel> listTravels = travelService.getAll();
        model.addObject("listTravels", listTravels);
        model.setViewName("travels");

        return model;
    }


    @RequestMapping(value = "/getTravels", method = RequestMethod.GET)
    public ModelAndView getTravels(@RequestParam int id) {
        Travel travel = travelService.get(id);
        ModelAndView model = new ModelAndView("TravelForm");
        model.addObject("travel", travel);

        return model;
    }

    @RequestMapping(value = "/newTravel", method = RequestMethod.GET)
    public ModelAndView newTravel(ModelAndView model) {
        Travel newTravel = new Travel();
        model.addObject("travel", newTravel);
        model.setViewName("TravelForm");
        return model;
    }

    @RequestMapping(value = "/saveTravel", method = RequestMethod.POST)
    public ModelAndView saveTravel(@ModelAttribute Travel newTravel,  BindingResult result) {
        travelService.add(newTravel);
        return new ModelAndView("redirect:/travels");
    }

    @RequestMapping(value = "/deleteTravel", method = RequestMethod.GET)
    public ModelAndView deleteTravel(@RequestParam int id) {
        travelService.delete(id);
        return new ModelAndView("redirect:/travels");
    }



    @RequestMapping(value="/users")
    public ModelAndView listUsers(ModelAndView model) throws IOException {

        List<User> listUsers = userService.getAll();
        model.addObject("listUsers", listUsers);
        model.setViewName("users");
        return model;
    }


    @RequestMapping(value = "/getUsers", method = RequestMethod.GET)
    public ModelAndView getUsers(@RequestParam int id) {
        User user = userService.get(id);
        ModelAndView model = new ModelAndView("userForm");
        model.addObject("user", user);
        return model;
    }

    @RequestMapping(value = "/newUser", method = RequestMethod.GET)
    public ModelAndView newUser(ModelAndView model) {
        User newUser = new User();
        model.addObject("user", newUser);
        model.setViewName("userForm");
        return model;
    }


    @RequestMapping(value = "/saveUser", method = RequestMethod.POST)
    public ModelAndView saveUser(@ModelAttribute("user") User user, BindingResult result) {
        userService.add(user);
        return new ModelAndView("redirect:/users");
    }

    @RequestMapping(value = "/deleteUser", method = RequestMethod.GET)
    public ModelAndView deleteUser(@RequestParam int id) {
        userService.delete(id);
        return new ModelAndView("redirect:/users");
    }




    @RequestMapping(value="/plans")
    public ModelAndView listPlans(ModelAndView model) throws IOException {
        List<Plan> listPlans = planService.getAll();
        model.addObject("listPlans", listPlans);
        model.setViewName("plans");

        return model;
    }


    @RequestMapping(value = "/getPlans", method = RequestMethod.GET)
    public ModelAndView getPlans(@RequestParam int id) {
        Plan plan = planService.get(id);
        ModelAndView model = new ModelAndView("planForm");
        model.addObject("plan", plan);

        return model;
    }

    @RequestMapping(value = "/newPlan", method = RequestMethod.GET)
    public ModelAndView newPlan(ModelAndView model) {
        Plan newPlan = new Plan();
        model.addObject("plan", newPlan);
        model.setViewName("planForm");
        return model;
    }

    @RequestMapping(value = "/savePlan", method = RequestMethod.POST)
    public ModelAndView savePlan(@ModelAttribute Plan newPlan, BindingResult result ) {
        planService.add(newPlan);
        return new ModelAndView("redirect:/plans");
    }

    @RequestMapping(value = "/deletePlan", method = RequestMethod.GET)
    public ModelAndView deletePlan(@RequestParam int id) {
        planService.delete(id);
        return new ModelAndView("redirect:/plans");
    }
}
