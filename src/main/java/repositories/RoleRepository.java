package repositories;

import models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface RoleRepository extends JpaRepository<Role, Integer> {
}
