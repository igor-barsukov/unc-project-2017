package servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import services.PlanService;

import models.Plan;
import repositories.PlanRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class PlanServiceImpl  implements PlanService {

    @Autowired
    private PlanRepository planRepository;

    @Transactional
    public Plan addOrUpdate(Plan obj) {
        return planRepository.saveAndFlush(obj);
    }

    @Transactional
    public List<Plan> getAll() {
        return planRepository.findAll();
    }

    @Transactional
    public void delete(Integer id) {
        planRepository.delete(id);
    }

    @Transactional
    public Plan get(Integer id) {
        return planRepository.findOne(id);
    }
}
