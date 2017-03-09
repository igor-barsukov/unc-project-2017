package repositories;

import models.UserToTravel;
import models.UserToTravelPK;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface UserToTravelRepository  extends JpaRepository<UserToTravel, UserToTravelPK> {
}
