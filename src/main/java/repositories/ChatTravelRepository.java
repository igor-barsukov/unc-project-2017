package repositories;

import models.ChatTravel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
//messages of travel
public interface ChatTravelRepository extends JpaRepository<ChatTravel, Integer> {


    @Query("select t from ChatTravel t where t.sender.id=?1 order by t.sendTime")
    List<ChatTravel> findAllByUserId(Integer userId);

    @Query("select t from ChatTravel t where t.travel.id=?1 order by t.sendTime")
    List<ChatTravel> findAllByTravelId(Integer travelId);

    @Query("select t from ChatTravel t where t.travel.id=?1 and t.sender.id=?2 order by t.sendTime")
    List<ChatTravel> findByTravelIdAndUserId(Integer travelId, Integer userId);


}
