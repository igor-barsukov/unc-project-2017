package repositories;

import models.Album;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface AlbumRepository extends JpaRepository<Album, Integer> {
}
