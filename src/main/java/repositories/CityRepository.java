package repositories;

import models.City;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface CityRepository extends JpaRepository<City, Integer> {
}
