package servicesImpl;

import models.PostOfTravel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.PostOfTravelRepository;
import services.PostOfTravelService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class PostOfTravelServiceImpl implements PostOfTravelService {

    @Autowired
    private PostOfTravelRepository postOfTravelRepository;
    @Transactional
    public PostOfTravel addOrUpdate(PostOfTravel obj) {
        return postOfTravelRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<PostOfTravel> getAll() {
        return  postOfTravelRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        postOfTravelRepository.delete(id);
    }
    @Transactional
    public PostOfTravel get(Integer id) {
        return postOfTravelRepository.findOne(id);
    }
}
