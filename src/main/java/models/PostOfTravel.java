package models;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "post_of_travel", schema = "public", catalog = "TravelDB")
public class PostOfTravel implements Serializable {
    private Integer id;
    private String body;
    private Timestamp sendTime;
    private User owner;
    private Travel travel;

    public PostOfTravel() {
    }

    public PostOfTravel(String body, Timestamp sendTime, User owner, Travel travel) {
        this.body = body;
        this.sendTime = sendTime;
        this.owner = owner;
        this.travel = travel;
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_seq")
    @SequenceGenerator(name = "post_seq", sequenceName = "post_of_travel_id_seq", allocationSize = 1)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "body", nullable = false, length = -1)
    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Basic
    @Column(name = "send_time", nullable = false)
    public Timestamp getSendTime() {
        return sendTime;
    }

    public void setSendTime(Timestamp sendTime) {
        this.sendTime = sendTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PostOfTravel that = (PostOfTravel) o;

        if (id != that.id) return false;
        if (body != null ? !body.equals(that.body) : that.body != null) return false;
        if (sendTime != null ? !sendTime.equals(that.sendTime) : that.sendTime != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (body != null ? body.hashCode() : 0);
        result = 31 * result + (sendTime != null ? sendTime.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "owner_id", referencedColumnName = "id", nullable = false)
    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    @ManyToOne
    @JoinColumn(name = "travel_id", referencedColumnName = "id", nullable = false)
    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travel) {
        this.travel = travel;
    }
}
