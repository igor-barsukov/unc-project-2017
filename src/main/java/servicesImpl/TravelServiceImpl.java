package servicesImpl;

import models.Travel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repositories.TravelRepository;
import java.util.List;
import services.TravelService;

/**
 * Created by acer-pc on 08.03.2017.
 */

@Service
public class TravelServiceImpl implements TravelService {

    @Autowired
    private TravelRepository travelRepository;

    @Transactional
    public Travel addOrUpdate(Travel obj) {

        return travelRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<Travel> getAll() {
        return travelRepository.findAll();
    }

    @Transactional
    public void delete(Integer id) {
        travelRepository.delete(id);
    }
    @Transactional
    public List<Travel> getByCountryId(Integer countryId){
       return travelRepository.getByCountryId(countryId);
    }

    @Transactional
    public Travel get(Integer id) {
        return travelRepository.findOne(id);
    }
}
