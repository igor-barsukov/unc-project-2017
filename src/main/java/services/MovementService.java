package services;

import models.Activity;
import models.Movement;

import java.util.List;

/**
 * Created by acer-pc on 15.04.2017.
 */
public interface MovementService  extends CRUDService<Movement, Integer> {
    List<Movement> getMovementsByTravelId(Integer travelId);
}


