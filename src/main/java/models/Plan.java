package models;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "plans", schema = "public", catalog = "TravelDB")
public class Plan implements Serializable {
    private Integer id;
    private String name;
    private Date startDate;
    private Date endDate;
    private String info;
    private boolean isActive;
    private String latitude;
    private String longitude;
    private Travel travel;
    private City city;

    public Plan() {
    }

    public Plan(String name, Date startDate, Date endDate, String info, boolean isActive, String latitude, String longitude, Travel travel, City city) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.info = info;
        this.isActive = isActive;
        this.latitude = latitude;
        this.longitude = longitude;
        this.travel = travel;
        this.city = city;
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "plan_seq")
    @SequenceGenerator(name = "plan_seq", sequenceName = "plans_id_seq", allocationSize = 1)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name", nullable = false, length = 100)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "start_date", nullable = false)
    @DateTimeFormat(pattern = "yyyy-M-dd")
    @Temporal(value = TemporalType.DATE )
    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    @Basic
    @Column(name = "end_date", nullable = true)
    @DateTimeFormat(pattern = "yyyy-M-dd")
    @Temporal(value = TemporalType.DATE )
    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @Basic
    @Column(name = "info", nullable = true, length = -1)
    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    @Basic
    @Column(name = "is_active", nullable = false)
    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    @Basic
    @Column(name = "latitude", nullable = true, length = 10)
    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    @Basic
    @Column(name = "longitude", nullable = true, length = 10)
    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Plan plan = (Plan) o;

        if (id != plan.id) return false;
        if (isActive != plan.isActive) return false;
        if (name != null ? !name.equals(plan.name) : plan.name != null) return false;
        if (startDate != null ? !startDate.equals(plan.startDate) : plan.startDate != null) return false;
        if (endDate != null ? !endDate.equals(plan.endDate) : plan.endDate != null) return false;
        if (info != null ? !info.equals(plan.info) : plan.info != null) return false;
        if (latitude != null ? !latitude.equals(plan.latitude) : plan.latitude != null) return false;
        if (longitude != null ? !longitude.equals(plan.longitude) : plan.longitude != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (startDate != null ? startDate.hashCode() : 0);
        result = 31 * result + (endDate != null ? endDate.hashCode() : 0);
        result = 31 * result + (info != null ? info.hashCode() : 0);
        result = 31 * result + (isActive ? 1 : 0);
        result = 31 * result + (latitude != null ? latitude.hashCode() : 0);
        result = 31 * result + (longitude != null ? longitude.hashCode() : 0);
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
    @JoinColumn(name = "city_id", referencedColumnName = "city_id")
    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
}
