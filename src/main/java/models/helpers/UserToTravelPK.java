package models.helpers;

import models.Travel;
import models.User;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Embeddable
public class UserToTravelPK implements Serializable {
    private User user;
    private Travel travel;

    public UserToTravelPK(User user, Travel travel) {
        this.user = user;
        this.travel = travel;
    }

    public UserToTravelPK(){}


    @ManyToOne
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @ManyToOne
    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travel) {
        this.travel = travel;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserToTravelPK that = (UserToTravelPK) o;

        if (user != that.user) return false;
        if (travel != that.travel) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = user.hashCode();
        result = 31 * result + travel.hashCode();
        return result;
    }
}
