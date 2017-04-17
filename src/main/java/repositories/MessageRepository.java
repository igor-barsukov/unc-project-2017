package repositories;

import models.ChatTravel;
import models.Message;
import models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface MessageRepository extends JpaRepository<Message, Integer> {

    @Query("select t from Message t where t.sender.id=?1 order by t.sendTime")
    List<Message> getAllBySenderId(Integer senderId);

    @Query("select t from Message t where t.recipient.id=?1 order by t.sendTime")
    List<Message> getAllByRecipientId(Integer recipientId);

    @Query("select t " +
            "from Message t" +
            " where t.recipient.id=?1 and t.sender.id=?2 " +
                   "or t.recipient.id=?2 and t.sender.id=?1 " +
            "order by t.sendTime")
    List<Message> findChatOfTwoUsers(Integer user1, Integer user2);



}
