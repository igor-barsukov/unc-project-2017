package controller;

import model.Plans;
import model.Travels;
import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;

/**
 * Created by qwerty on 04.03.2017.
 */
@Controller
public class MainController {

    @Autowired
    @Qualifier("TravelsDAOImpl")
    private  dao.JdbcDAO JdbcDAO1;

    @Autowired
    @Qualifier("UserDAOImpl")
    private  dao.JdbcDAO JdbcDAO2;

    @Autowired
    @Qualifier("plansDAOImpl")
    private  dao.JdbcDAO JdbcDAO3;


    @RequestMapping(value="/travels")
    public ModelAndView listTravels(ModelAndView model) throws IOException {
        List<Travels> listTravels = JdbcDAO1.list();
        model.addObject("listTravels", listTravels);
        model.setViewName("travels");

        return model;
    }


    @RequestMapping(value = "/getTravels", method = RequestMethod.GET)
    public ModelAndView getTravels(HttpServletRequest request) {
        Integer travelID = Integer.parseInt(request.getParameter("id"));
        Travels travel = (Travels) JdbcDAO1.get(travelID);
        ModelAndView model = new ModelAndView("TravelForm");
        model.addObject("travel", travel);

        return model;
    }

    @RequestMapping(value = "/newTravel", method = RequestMethod.GET)
    public ModelAndView newTravel(ModelAndView model) {
        Travels newTravel = new Travels();
        model.addObject("travel", newTravel);
        model.setViewName("TravelForm");
        return model;
    }

    @RequestMapping(value = "/saveTravel", method = RequestMethod.POST)
    public ModelAndView saveTravel(@ModelAttribute Travels newTravel) {
        JdbcDAO1.saveOrUpdate(newTravel);
        return new ModelAndView("redirect:/travels");
    }

    @RequestMapping(value = "/deleteTravel", method = RequestMethod.GET)
    public ModelAndView deleteTravel(HttpServletRequest request) {
        int travelID = Integer.parseInt(request.getParameter("id"));
        JdbcDAO1.delete(travelID);
        return new ModelAndView("redirect:/travels");
    }

    @RequestMapping(value="/users")
    public ModelAndView listUsers(ModelAndView model) throws IOException {
        List<User> listUsers = JdbcDAO2.list();
        model.addObject("listUsers", listUsers);
        model.setViewName("users");

        return model;
    }


    @RequestMapping(value = "/getUsers", method = RequestMethod.GET)
    public ModelAndView getUsers(HttpServletRequest request) {
        Integer userID = Integer.parseInt(request.getParameter("id"));
        User user = (User) JdbcDAO2.get(userID);
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
    public ModelAndView saveUser(@ModelAttribute User newUser) {
        JdbcDAO2.saveOrUpdate(newUser);
        return new ModelAndView("redirect:/users");
    }

    @RequestMapping(value = "/deleteUser", method = RequestMethod.GET)
    public ModelAndView deleteUser(HttpServletRequest request) {
        int userID = Integer.parseInt(request.getParameter("id"));
        JdbcDAO2.delete(userID);
        return new ModelAndView("redirect:/users");
    }

    @RequestMapping(value="/plans")
    public ModelAndView listPlans(ModelAndView model) throws IOException {
        List<Plans> listPlans = JdbcDAO3.list();
        model.addObject("listPlans", listPlans);
        model.setViewName("plans");

        return model;
    }


    @RequestMapping(value = "/getPlans", method = RequestMethod.GET)
    public ModelAndView getPlans(HttpServletRequest request) {
        Integer planID = Integer.parseInt(request.getParameter("id"));
        Plans plan = (Plans) JdbcDAO3.get(planID);
        ModelAndView model = new ModelAndView("planForm");
        model.addObject("plan", plan);

        return model;
    }

    @RequestMapping(value = "/newPlan", method = RequestMethod.GET)
    public ModelAndView newPlan(ModelAndView model) {
        Plans newPlan = new Plans();
        model.addObject("plan", newPlan);
        model.setViewName("planForm");
        return model;
    }

    @RequestMapping(value = "/savePlan", method = RequestMethod.POST)
    public ModelAndView savePlan(@ModelAttribute Plans newPlan) {
        JdbcDAO3.saveOrUpdate(newPlan);
        return new ModelAndView("redirect:/plans");
    }

    @RequestMapping(value = "/deletePlan", method = RequestMethod.GET)
    public ModelAndView deletePlan(HttpServletRequest request) {
        int planID = Integer.parseInt(request.getParameter("id"));
        JdbcDAO3.delete(planID);
        return new ModelAndView("redirect:/plans");
    }
}
