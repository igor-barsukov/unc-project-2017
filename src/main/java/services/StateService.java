package services;

import models.State;
import java.util.List;
/**
 * Created by acer-pc on 08.03.2017.
 */
public interface StateService  extends CRUDService<State, Integer> {
    List<State>  getByCountryId(Integer countryId);
    State findByName(String name);
}
