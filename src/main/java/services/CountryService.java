package services;

import models.Country;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface CountryService  extends CRUDService<Country, Integer> {
    Country findByName(String name);
}
