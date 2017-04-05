package repositories;

import models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface MessageRepository extends JpaRepository<Message, Integer> {
}
