package repositories;

import models.Travel;
import models.User;
import models.UserToTravel;
import models.UserToTravelPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface UserToTravelRepository extends JpaRepository<UserToTravel, UserToTravelPK> {
    @Query("select ut.travel from UserToTravel ut where ut.userId=?1")
    List<Travel> getByUserId(Integer userId);

    @Query("select ut.user from UserToTravel ut where ut.travelId=?1")
    List<User> getByTravelId(Integer travelId);
}
