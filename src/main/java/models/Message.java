package models;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "messages", schema = "public", catalog = "TravelDB")
public class Message implements Serializable {
    private Integer id;
    private Timestamp sendTime;
    private String body;
    private User sender;
    private User recipient;

    public Message() {
    }

    public Message( Timestamp sendTime, String body, User sender, User recipient) {
        this.sendTime = sendTime;
        this.body = body;
        this.sender = sender;
        this.recipient = recipient;
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "message_seq")
    @SequenceGenerator(name = "message_seq", sequenceName = "messages_id_seq", allocationSize = 1)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    @Basic
    @Column(name = "send_time", nullable = false)
    public Timestamp getSendTime() {
        return sendTime;
    }

    public void setSendTime(Timestamp sendTime) {
        this.sendTime = sendTime;
    }

    @Basic
    @Column(name = "body", nullable = false, length = -1)
    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Message message = (Message) o;

        if (id != message.id) return false;

        if (sendTime != null ? !sendTime.equals(message.sendTime) : message.sendTime != null) return false;
        if (body != null ? !body.equals(message.body) : message.body != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;

        result = 31 * result + (sendTime != null ? sendTime.hashCode() : 0);
        result = 31 * result + (body != null ? body.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "sender_id", referencedColumnName = "id", nullable = false)
    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    @ManyToOne
    @JoinColumn(name = "recipient_id", referencedColumnName = "id", nullable = false)
    public User getRecipient() {
        return recipient;
    }

    public void setRecipient(User recipient) {
        this.recipient = recipient;
    }
}
