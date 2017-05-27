package repositories;

import models.City;
import models.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface StateRepository extends JpaRepository<State, Integer> {

    @Query("SELECT t FROM State t WHERE t.country.id = ?1")
    List<State> findByCountryId(Integer countryId);

    State findByName(String name);
}

