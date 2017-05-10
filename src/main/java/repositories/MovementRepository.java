package repositories;

import models.Activity;
import models.Movement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by acer-pc on 15.04.2017.
 */
public interface MovementRepository extends JpaRepository<Movement, Integer> {

    @Query("select t from Movement t where t.travel.id=?1")
    List<Movement> getMovementsByTravelId(Integer travelId);
}
