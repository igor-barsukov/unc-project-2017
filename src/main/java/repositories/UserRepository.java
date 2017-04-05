package repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import  models.User;
import java.util.List;
/**
 * Created by acer-pc on 07.03.2017.
 */
public interface UserRepository extends  JpaRepository<User, Integer> {
    List<User> findByFirstName(String firstName);
    List<User> findByFirstNameAndLastName(String firstName, String lastName);
    User  findByEmail(String email);
}
