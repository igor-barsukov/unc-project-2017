package repositories;

import models.City;
import models.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface CountryRepository extends JpaRepository<Country, Integer> {

    Country findByName(String name);

}
