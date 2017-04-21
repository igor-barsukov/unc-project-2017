package repositories;

import models.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 15.04.2017.
 */
public interface ActivityRepository extends JpaRepository<Activity, Integer> {
}

