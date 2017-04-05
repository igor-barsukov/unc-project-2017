package repositories;

import models.Country;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface CountryRepository extends JpaRepository<Country, Integer> {
}
