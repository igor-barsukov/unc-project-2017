package repositories;

import models.Travel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface TravelRepository extends JpaRepository<Travel, Integer> {
    public final static String FIND_BY_CITY = "select distinct t from Travel t  " +
            "left join t.cities c  " +
            " left join t.activities a  where c.id=?1 or a.city.id=?1";


    public final static String FIND_BY_STATE = "select distinct t.* from Travels t " +
            "left join Activities a  on a.travel_id=t.id " +
            "left join City_To_Travels ct on ct.travel_id=t.id  "+
            "left join Cities c on c.id=ct.city_id or a.city_id=c.id " +
            "left join States s on c.state_id=s.id "
            +
            " where s.id=?1  ";


    public final static String FIND_BY_COUNTRY = "select distinct t.* from Travels t " +
            "left join Activities a  on a.travel_id=t.id " +
            "left join City_To_Travels ct on ct.travel_id=t.id "+
            "left join Cities c on c.id=ct.city_id or a.city_id=c.id " +
            "left join States s on c.state_id=s.id " +
            "left join Countries co on s.country_id=co.id "  +
            " where co.id=?1  ";



    @Query(FIND_BY_CITY)
    List<Travel> getByCityId(Integer cityId);

    @Query(value = FIND_BY_STATE, nativeQuery = true)
    List<Travel> getByStateId(Integer stateId);

    @Query(value = FIND_BY_COUNTRY, nativeQuery = true)
    List<Travel> getByCountryId(Integer countryId);
}
