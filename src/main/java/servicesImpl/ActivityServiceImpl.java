package servicesImpl;

import models.Activity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.ActivityRepository;
import services.ActivityService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 15.04.2017.
 */
@Service
public class ActivityServiceImpl implements ActivityService {
    @Autowired
    private ActivityRepository activityRepository;

    @Transactional
    public Activity addOrUpdate(Activity obj) {
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
}
