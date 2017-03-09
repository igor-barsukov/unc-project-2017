package services;
import models.User;

import java.util.List;
/**
 * Created by acer-pc on 08.03.2017.
 */


public interface UserService extends CRUDService<User, Integer>{
    List<User> getByFirstNameAndLastName(String firstName, String lastName);
}
