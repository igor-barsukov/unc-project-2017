package servicesImpl;

import models.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.CityRepository;
import services.CityService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class CityServiceImpl implements CityService {
    @Autowired
    private CityRepository cityRepository;

    @Transactional
    public City addOrUpdate(City obj) {
        return cityRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<City> getAll() {
        return cityRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        cityRepository.delete(id);
    }

    @Transactional
    public City get(Integer id) {
        return cityRepository.findOne(id);
    }

    @Transactional
    public  List<City> getByStateId(Integer stateId){
        return  cityRepository.findByStateId(stateId);
    }

    @Transactional
    public City findByName(String name) {
        return cityRepository.findByName(name);
    }

    @Transactional
    public City findByNameAndStateName(String name, String stateName) {
        return cityRepository.findByNameAndCountryName(name, stateName);
    }


}
