package models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Collection;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "travels", schema = "public", catalog = "TravelDB")
public class Travel implements Serializable {
    private Integer id;
    private String name;
    private Timestamp startDate;
    private Timestamp endDate;
    private String info;
    private boolean isActive;
    private String photo;

    @JsonIgnore
    private Collection<Album> albums;
    @JsonIgnore
    private Collection<ChatTravel> chats;
    @JsonIgnore
    private Collection<PostOfTravel> posts;
    @JsonIgnore
    private Collection<UserToTravel> userToTravels;
    @JsonIgnore
    private Collection<Activity> activities;
    @JsonIgnore
    private Collection<Movement> movements;
    private Collection<Country> countries;
    public Travel() {
    }

    public Travel(String name, Timestamp startDate, Timestamp endDate, String info, boolean isActive) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.info = info;
        this.isActive = isActive;

    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "travel_seq")
    @SequenceGenerator(name = "travel_seq", sequenceName = "travels_id_seq", allocationSize = 1)
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
    public Timestamp getStartDate() {
        return startDate;
    }

    public void setStartDate(Timestamp startDate) {
        this.startDate = startDate;
    }

    @Basic
    @Column(name = "end_date", nullable = true)
    public Timestamp getEndDate() {
        return endDate;
    }

    public void setEndDate(Timestamp endDate) {
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
    @Column(name = "photo", nullable = true, length = -1)
    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @Basic
    @Column(name = "is_active", nullable = false)
    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Travel travel = (Travel) o;

        if (id != travel.id) return false;
        if (isActive != travel.isActive) return false;
        if (name != null ? !name.equals(travel.name) : travel.name != null) return false;
        if (startDate != null ? !startDate.equals(travel.startDate) : travel.startDate != null) return false;
        if (endDate != null ? !endDate.equals(travel.endDate) : travel.endDate != null) return false;
        if (info != null ? !info.equals(travel.info) : travel.info != null) return false;

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
        return result;
    }

    @OneToMany(mappedBy = "travel", cascade = CascadeType.REMOVE)
    public Collection<Album> getAlbums() {
        return albums;
    }

    public void setAlbums(Collection<Album> albums) {
        this.albums = albums;
    }

    @OneToMany(mappedBy = "travel")
    public Collection<ChatTravel> getChats() {
        return chats;
    }

    public void setChats(Collection<ChatTravel> chats) {
        this.chats = chats;
    }

    @OneToMany(mappedBy = "travel")
    public Collection<PostOfTravel> getPosts() {
        return posts;
    }

    public void setPosts(Collection<PostOfTravel> posts) {
        this.posts = posts;
    }

    @OneToMany(mappedBy = "PK.travel", cascade = CascadeType.REMOVE)
    public Collection<UserToTravel> getUserToTravels() {
        return userToTravels;
    }

    public void setUserToTravels(Collection<UserToTravel> userToTravels) {
        this.userToTravels = userToTravels;
    }

    @OneToMany(mappedBy = "travel", cascade = CascadeType.REMOVE)
    public Collection<Activity> getActivities() {
        return activities;
    }

    public void setActivities(Collection<Activity> activities) {
        this.activities = activities;
    }


    @OneToMany(mappedBy = "travel", cascade = CascadeType.REMOVE)
    public Collection<Movement> getMovements() {
        return movements;
    }

    public void setMovements(Collection<Movement> movements) {
        this.movements = movements;
    }

    @ManyToMany(fetch = FetchType.EAGER, mappedBy = "travels")
    public Collection<Country> getCountries() {
        return countries;
    }

    public void setCountries(Collection<Country> countries) {
        this.countries = countries;
    }


}
