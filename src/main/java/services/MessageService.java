package services;


import models.Message;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface MessageService extends CRUDService<Message, Integer> {

    List<Message> getAllBySenderId(Integer senderId);
    List<Message> getAllByRecipientId(Integer recipientId);
    List<Message> getChatOfTwoUsers(Integer user1, Integer user2);
}
