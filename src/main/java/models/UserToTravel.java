package models;

import models.helpers.UserToTravelPK;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "user_to_travels", schema = "public", catalog = "TravelDB")
@AssociationOverrides({
        @AssociationOverride(name ="PK.user", joinColumns = @JoinColumn(name ="user_id")),
        @AssociationOverride(name ="PK.travel", joinColumns = @JoinColumn(name ="travel_id"))
})
public class UserToTravel implements Serializable {
    UserToTravelPK pk=new UserToTravelPK();
    private Role role;

    public UserToTravel() {
    }

    public UserToTravel(User user, Travel travel, Role role) {
        pk.setUser(user);
        pk.setTravel(travel);
        this.role=role;
    }

    @EmbeddedId
    public UserToTravelPK getPK() {
        return pk;
    }

    public void setPK(UserToTravelPK pk) {
        this.pk = pk;
    }

    @Transient
    public User getUser() {
        return getPK().getUser();
    }

    public void setUser(User user) {
        getPK().setUser(user);
    }
    @Transient
    public Travel getTravel() {
        return getPK().getTravel();
    }

    public void setTravel(Travel travel) {
        getPK().setTravel(travel);
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserToTravel that = (UserToTravel) o;

        if (((UserToTravel) o).pk != that.pk) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = pk.hashCode();
        return result;
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
