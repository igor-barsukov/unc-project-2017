package servicesImpl;

import models.Photo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.PhotoRepository;
import services.PhotoService;
import services.PlanService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class PhotoServiceImpl  implements PhotoService{

    @Autowired
    private PhotoRepository photoRepository;

    @Transactional
    public Photo addOrUpdate(Photo obj) {
        return photoRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<Photo> getAll() {
        return photoRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        photoRepository.delete(id);
    }
    @Transactional
    public Photo get(Integer id) {
        return photoRepository.findOne(id);
    }
    @Transactional
    public List<Photo> getPhotosByOwner(Integer owner){
        return photoRepository.getPhotosByOwner(owner);
    }
}
