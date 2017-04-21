package servicesImpl;

import models.Movement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.MovementRepository;
import services.MovementService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 15.04.2017.
 */
@Service
public class MovementServiceImpl  implements MovementService{
    @Autowired
    private MovementRepository movementRepository;

    @Transactional
    public Movement addOrUpdate(Movement obj) {
        return movementRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<Movement> getAll() {
        return movementRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        movementRepository.delete(id);
    }
    @Transactional
    public Movement get(Integer id) {
        return movementRepository.findOne(id);
    }
}
