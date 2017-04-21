package servicesImpl;

import models.Transport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.TransportRepository;
import services.TransportService;
import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 15.04.2017.
 */
@Service
public class TransportServiceImpl implements TransportService {
    @Autowired
    private TransportRepository transportRepository;

    @Transactional
    public Transport addOrUpdate(Transport obj) {
        return transportRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<Transport> getAll() {
        return transportRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        transportRepository.delete(id);
    }
    @Transactional
    public Transport get(Integer id) {
        return transportRepository.findOne(id);
    }
}
