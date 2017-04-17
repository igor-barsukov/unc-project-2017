package repositories;

import models.Movement;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 15.04.2017.
 */
public interface MovementRepository extends JpaRepository<Movement, Integer> {
}
