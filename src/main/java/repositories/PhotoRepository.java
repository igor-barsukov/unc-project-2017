package repositories;

import models.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface PhotoRepository extends JpaRepository<Photo, Integer> {
}
