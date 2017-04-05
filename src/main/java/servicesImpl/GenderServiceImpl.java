package servicesImpl;

import models.Gender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.GenderRepository;
import services.GenderService;

import javax.transaction.Transactional;
import java.util.List;


/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class GenderServiceImpl implements GenderService {

    @Autowired
    private GenderRepository genderRepository;
    @Transactional
    public Gender addOrUpdate(Gender obj) {
        return genderRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<Gender> getAll() {
        return genderRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        genderRepository.delete(id);
    }
    @Transactional
    public Gender get(Integer id) {
        return genderRepository.findOne(id);
    }
}
