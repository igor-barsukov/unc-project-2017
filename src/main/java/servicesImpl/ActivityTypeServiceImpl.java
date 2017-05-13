package servicesImpl;

import models.ActivityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.ActivityRepository;
import repositories.ActivityTypeRepository;
import services.ActivityTypeService;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ActivityTypeServiceImpl implements ActivityTypeService {

    @Autowired
    ActivityTypeRepository activityTypeRepository;

    @Transactional
    public ActivityType addOrUpdate(ActivityType obj) {
        return activityTypeRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<ActivityType> getAll() {
        return activityTypeRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        activityTypeRepository.delete(id);
    }
    @Transactional
    public ActivityType get(Integer id) {
        return activityTypeRepository.findOne(id);
    }
}
