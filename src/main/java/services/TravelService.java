package services;

import models.Travel;

import java.util.List;


/**
 * Created by acer-pc on 08.03.2017.
 */
public interface TravelService extends CRUDService<Travel, Integer> {
    List<Travel> getByCountryId(Integer countryId);
}
