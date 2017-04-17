package models;

import models.helpers.UserToTravelPK;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "user_to_travel", schema = "public", catalog = "TravelDB")
@IdClass(UserToTravelPK.class)
public class UserToTravel implements Serializable {
    private Integer userId;
    private Integer travelId;
    private User user;
    private Travel travel;
    private Role role;

    public UserToTravel() {
    }

    public UserToTravel(Integer userId, Integer travelId, Role role) {
        this.userId = userId;
        this.travelId = travelId;
        this.role=role;
    }

    @Id
    @Column(name = "user_id", nullable = false)
    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Id
    @Column(name = "travel_id", nullable = false)
    public Integer getTravelId() {
        return travelId;
    }

    public void setTravelId(Integer travelId) {
        this.travelId = travelId;
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserToTravel that = (UserToTravel) o;

        if (userId != that.userId) return false;
        if (travelId != that.travelId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + travelId;
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false, insertable = false, updatable = false)
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @ManyToOne
    @JoinColumn(name = "travel_id", referencedColumnName = "id", nullable = false, insertable = false, updatable = false )
    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travel) {
        this.travel = travel;
    }

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id", nullable = false)
    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
