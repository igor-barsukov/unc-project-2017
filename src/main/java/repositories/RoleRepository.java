package repositories;

import models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface RoleRepository extends JpaRepository<Role, Integer> {
    @Query("select r from Role r where lower(trim(r.name))=lower(trim(?1))")
    Role findByName(String name);
}
