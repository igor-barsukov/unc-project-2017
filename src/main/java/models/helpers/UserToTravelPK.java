package models.helpers;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by acer-pc on 07.03.2017.
 */
public class UserToTravelPK implements Serializable {
    private Integer userId;
    private Integer travelId;

    @Column(name = "user_id", nullable = false)
    @Id
    public Integer getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Column(name = "travel_id", nullable = false)
    @Id
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

        UserToTravelPK that = (UserToTravelPK) o;

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
}
