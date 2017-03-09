package models;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "chat_travel", schema = "public", catalog = "TravelDB")
public class ChatTravel implements Serializable {
    private Integer id;
    private Timestamp sendTime;
    private String body;
    private Travel travel;
    private User sender;

    public ChatTravel() {
    }

    public ChatTravel( Timestamp sendTime, String body, Travel travel, User sender) {
        this.sendTime = sendTime;
        this.body = body;
        this.travel = travel;
        this.sender = sender;
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "chat_travel_seq")
    @SequenceGenerator(name = "chat_travel_seq", sequenceName = "chat_travel_id_seq", allocationSize = 1)
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

        ChatTravel that = (ChatTravel) o;

        if (id!=that.id) return false;
        if (sendTime != null ? !sendTime.equals(that.sendTime) : that.sendTime != null) return false;
        if (body != null ? !body.equals(that.body) : that.body != null) return false;

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
    @JoinColumn(name = "travel_id", referencedColumnName = "id", nullable = false)
    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travel) {
        this.travel = travel;
    }

    @ManyToOne
    @JoinColumn(name = "sender_id", referencedColumnName = "id", nullable = false)
    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }
}
