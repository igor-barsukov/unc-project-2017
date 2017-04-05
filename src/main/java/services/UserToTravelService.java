package services;

import models.Travel;
import models.User;
import models.UserToTravel;
import models.UserToTravelPK;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface UserToTravelService  extends CRUDService<UserToTravel, UserToTravelPK> {
    List<Travel> getTravelsByUserId(Integer userId);
    List<User> getUsersByTravelId (Integer travelId);
}
