package servicesImpl;

import models.City;
import models.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.StateRepository;
import services.StateService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class StateServiceImpl implements StateService{
    @Autowired
    private StateRepository  stateRepository;

    @Transactional
    public State addOrUpdate(State obj) {
        return stateRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<State> getAll() {
        return stateRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        stateRepository.delete(id);
    }
    @Transactional
    public State get(Integer id) {
        return stateRepository.findOne(id);
    }

    @Transactional
    public  List<State> getByCountryId(Integer countryId){
        return  stateRepository.findByCountryId(countryId);
    }

    @Transactional
    public State findByName(String name) {
        return stateRepository.findByName(name);
    }
}
