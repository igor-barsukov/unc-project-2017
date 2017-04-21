package services;

import models.City;

import java.util.List;
/**
 * Created by acer-pc on 08.03.2017.
 */
public interface CityService  extends CRUDService<City, Integer>{
    List<City> getByStateId(Integer stateId);
}
