package models;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by acer-pc on 13.05.2017.
 */

@Entity
@Table(name = "activity_types", schema = "public", catalog = "TravelDB")
public class ActivityType implements Serializable {
    private Integer id;
    private String name;

    public ActivityType(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public ActivityType() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ActivityType that = (ActivityType) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        return name != null ? name.equals(that.name) : that.name == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "activity_type_id_seq")
    @SequenceGenerator(name = "activity_type_id_seq", sequenceName = "activity_type_id_seq", allocationSize = 1)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    @Basic
    @Column(name = "name", nullable = true, length = -1)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
