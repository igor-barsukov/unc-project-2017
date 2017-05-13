package models;

import org.hibernate.annotations.Type;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import org.postgresql.geometric.PGpoint;


/**
 * Created by acer-pc on 15.04.2017.
 */
@Entity
@Table(name = "activities", schema = "public", catalog = "TravelDB")
public class Activity implements Serializable {
    private Integer id;
    private String name;
    private Date startTime;
    private Date endTime;
    private String address;
    private String description;
    private Travel travel;
    private Integer price;
    private String ticket;
    private PGpoint coordinates;
    private ActivityType activityType;


    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "activities_seq")
    @SequenceGenerator(name = "activities_seq", sequenceName = "activities_id_seq", allocationSize = 1)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Activity() {
    }

    public Activity(Integer id, String name, Date startTime, Date endTime, Travel travel) {
        this.id = id;
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.travel = travel;
    }

    @Basic
    @Column(name = "name", nullable = false, length = -1)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Basic
    @Column(name = "price", nullable = true)
    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Basic
    @Column(name = "start_time", nullable = false)
    @DateTimeFormat(pattern = "yyyy-M-dd HH:mm")
    @Temporal(value = TemporalType.TIMESTAMP)
    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    @Basic
    @Column(name = "end_time", nullable = false)
    @DateTimeFormat(pattern = "yyyy-M-dd HH:mm")
    @Temporal(value = TemporalType.TIMESTAMP)
    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    @Basic
    @Column(name = "address", nullable = true, length = -1)
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }



    @Basic
    @Column(name = "coordinates", columnDefinition = "point", nullable = true)
    @Type(type = "models.helpers.PointUserType")
    public PGpoint getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(PGpoint coordinates) {
        this.coordinates = coordinates;
    }


    @Basic
    @Column(name = "description", nullable = true, length = -1)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }



    @Basic
    @Column(name = "ticket", nullable = true, length = -1)
    public String getTicket() {
        return ticket;
    }

    public void setTicket(String ticket) {
        this.ticket = ticket;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Activity that = (Activity) o;

        if (id != that.id) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (startTime != null ? !startTime.equals(that.startTime) : that.startTime != null) return false;
        if (endTime != null ? !endTime.equals(that.endTime) : that.endTime != null) return false;
        if (address != null ? !address.equals(that.address) : that.address != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (startTime != null ? startTime.hashCode() : 0);
        result = 31 * result + (endTime != null ? endTime.hashCode() : 0);
        result = 31 * result + (address != null ? address.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "travel_id", referencedColumnName = "id", nullable = false)
    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travelsByTravelId) {
        this.travel = travelsByTravelId;
    }

    @ManyToOne
    @JoinColumn(name = "activity_type_id", referencedColumnName = "id", nullable = false)
    public ActivityType getActivityType() {
        return activityType;
    }

    public void setActivityType(ActivityType activityType) {
        this.activityType = activityType;
    }
}
