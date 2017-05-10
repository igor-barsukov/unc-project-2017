package repositories;

import models.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {

    @Query("select t from Activity t where t.travel.id=?1")
    List<Activity> getActivitiesByTravelId(Integer travelId);
}

