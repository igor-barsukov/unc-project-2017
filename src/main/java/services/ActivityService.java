package services;

import models.Activity;

import java.util.List;

/**
 * Created by acer-pc on 15.04.2017.
 */
public interface ActivityService extends CRUDService<Activity, Integer> {
    List<Activity> getActivitiesByTravelId(Integer travelId);
}
