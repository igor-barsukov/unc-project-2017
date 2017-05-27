package repositories;

import models.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface CityRepository extends JpaRepository<City, Integer> {

    @Query("SELECT t FROM City t WHERE t.state.id = ?1")
    List<City> findByStateId(Integer stateId);

    City findByName(String name);

    @Query("SELECT t FROM City t WHERE t.name=?1 and t.state.country.name = ?2")
    City findByNameAndCountryName(String name, String countryName);
}
