package repositories;

import models.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface PlanRepository extends JpaRepository<Plan, Integer> {
}
