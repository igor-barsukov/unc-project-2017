package servicesImpl;

import models.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.CountryRepository;
import services.CountryService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class CountryServiceImpl implements CountryService {
    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public Country addOrUpdate(Country obj) {
        return countryRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<Country> getAll() {
        return countryRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        countryRepository.delete(id);
    }

    @Transactional
    public Country get(Integer id) {
        return countryRepository.findOne(id);
    }

    @Transactional
    public Country findByName(String name) {
        return countryRepository.findByName(name);
    }
}
