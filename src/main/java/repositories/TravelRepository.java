package repositories;

import models.Travel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface TravelRepository extends JpaRepository<Travel, Integer> {
    @Query("select t from Travel t join t.countries c where c.id=?1")
    List<Travel> getByCountryId(Integer countryId);
}
