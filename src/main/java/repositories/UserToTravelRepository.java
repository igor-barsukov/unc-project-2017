package repositories;

import models.Travel;
import models.User;
import models.UserToTravel;
import models.helpers.UserToTravelPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface UserToTravelRepository extends JpaRepository<UserToTravel, UserToTravelPK> {
    @Query("select ut.PK.travel from UserToTravel ut where ut.PK.user.id=?1")
    List<Travel> getByUserId(Integer userId);

    @Query("select ut.PK.user from UserToTravel ut where ut.PK.travel.id=?1")
    List<User> getByTravelId(Integer travelId);

    @Query("select ut from UserToTravel ut where ut.PK.travel.id=?1")
    List<UserToTravel> getUserToTravelByTravelId(Integer travelId);

}
