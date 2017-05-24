package repositories;

import models.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface AlbumRepository extends JpaRepository<Album, Integer> {
    @Query("select t from Album t where t.travel.id=?1")
    Album getAlbumByTravelID(Integer travelId);
}
