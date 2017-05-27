package repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import  models.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
/**
 * Created by acer-pc on 07.03.2017.
 */
public interface UserRepository extends  JpaRepository<User, Integer> {

    List<User> findByFirstName(String firstName);
    User  findByEmail(String email);

    @Query("SELECT t FROM User t WHERE t.email = ?1 AND t.password = ?2")
    User findByEmailAndPassword(String email, String password);
}
