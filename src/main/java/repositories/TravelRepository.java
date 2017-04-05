package repositories;

import models.Travel;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 08.03.2017.
 */


    public interface TravelRepository extends JpaRepository<Travel, Integer> {

    }
