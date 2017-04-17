package servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.MessageRepository;
import services.MessageService;
import models.Message;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Transactional
    public Message addOrUpdate(Message obj) {
        return messageRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<Message> getAll() {
        return  messageRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        messageRepository.delete(id);
    }

    @Transactional
    public Message get(Integer id) {
        return messageRepository.findOne(id);
    }

    @Transactional
    public List<Message> getAllBySenderId(Integer senderId) {
        return messageRepository.getAllBySenderId(senderId);
    }
    @Transactional
    public List<Message> getAllByRecipientId(Integer recipientId) {
        return messageRepository.getAllByRecipientId(recipientId);
    }
    @Transactional
    public List<Message> getChatOfTwoUsers(Integer user1, Integer user2) {
        return messageRepository.findChatOfTwoUsers(user1, user2);
    }
}
