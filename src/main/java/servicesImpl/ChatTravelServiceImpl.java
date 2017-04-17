package servicesImpl;

import models.ChatTravel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.ChatTravelRepository;
import services.ChatTravelService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class ChatTravelServiceImpl implements ChatTravelService {
    @Autowired
    private ChatTravelRepository chatTravelRepository;

    @Transactional
    public ChatTravel addOrUpdate(ChatTravel obj) {
        return chatTravelRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<ChatTravel> getAll() {
        return chatTravelRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        chatTravelRepository.delete(id);
    }

    @Transactional
    public ChatTravel get(Integer id) {
        return chatTravelRepository.findOne(id);
    }

    @Transactional
    public List<ChatTravel> getAllByUserId(Integer userId) {
        return  chatTravelRepository.findAllByUserId(userId);
    }

    @Transactional
    public List<ChatTravel> getAllByTravelId(Integer travelId) {
        return  chatTravelRepository.findAllByTravelId(travelId);
    }

    @Transactional
    public List<ChatTravel> getByTravelIdAndUserId(Integer travelId, Integer userId) {
        return chatTravelRepository.findByTravelIdAndUserId(travelId,userId);
    }
}
