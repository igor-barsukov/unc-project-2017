package servicesImpl;

import models.Activity;
import models.City;
import models.Travel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.ActivityRepository;
import repositories.CityRepository;
import repositories.TravelRepository;
import services.ActivityService;

import javax.transaction.Transactional;
import java.util.List;
import servicesImpl.helpers.*;


@Service
public class ActivityServiceImpl implements ActivityService {
    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private TravelRepository travelRepository;

    private void setTravelCity(Activity activity) {
        City city = null;
        if (!(activity.getCoordinates().x == 0 && activity.getCoordinates().y == 0)) {
            CityCountry cityCountry = CityFromCoordinate.getByCoordinates(activity.getCoordinates().x, activity.getCoordinates().y);

            if (cityCountry != null && cityCountry.getCity() != null) {
                if (cityCountry.getCountry() == null)
                    city = cityRepository.findByName(cityCountry.getCity());
                else
                    city = cityRepository.findByNameAndCountryName(cityCountry.getCity(), cityCountry.getCountry());
                if (city!=null){
                    activity.setCity(city);
                }
               /* if (city != null) {
                    Travel travel = activity.getTravel();
                    if (!travel.getCities().contains(city)) {
                        travel.getCities().add(city);
                        city.getTravels().add(travel);
                        travelRepository.saveAndFlush(travel);
                        cityRepository.saveAndFlush(city);
                    }
                }*/
            }
        }
    }



    public Activity addOrUpdate(Activity obj) {

        if (obj.getCoordinates()!=null)
            setTravelCity(obj);
        return activityRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<Activity> getAll() {
        return activityRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        activityRepository.delete(id);
    }
    @Transactional
    public Activity get(Integer id) {
        return activityRepository.findOne(id);
    }

    public List<Activity> getActivitiesByTravelId(Integer travelId) {
        return activityRepository.getActivitiesByTravelId(travelId);
    }
}
