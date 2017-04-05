package repositories;

import models.Gender;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface GenderRepository extends JpaRepository<Gender, Integer> {
}
