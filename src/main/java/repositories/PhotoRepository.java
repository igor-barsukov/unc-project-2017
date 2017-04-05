package repositories;

import models.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface PhotoRepository extends JpaRepository<Photo, Integer> {

    @Query("select p from Photo p where p.owner.id=?1")
    List<Photo> getPhotosByOwner(Integer owner);
}
