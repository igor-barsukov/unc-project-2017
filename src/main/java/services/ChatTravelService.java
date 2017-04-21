package services;

import models.ChatTravel;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface ChatTravelService  extends CRUDService<ChatTravel,Integer> {

    List<ChatTravel> getAllByUserId(Integer userId);
    List<ChatTravel> getAllByTravelId(Integer travelId);
    List<ChatTravel> getByTravelIdAndUserId(Integer travelId, Integer userId);
}
