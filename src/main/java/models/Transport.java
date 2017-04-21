package models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

/**
 * Created by acer-pc on 15.04.2017.
 */
@Entity
@Table(name = "transports", schema = "public", catalog = "TravelDB")
public class Transport  implements Serializable{
    private int id;
    private String name;
    @JsonIgnore
    private Collection<Movement> movements;

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name", nullable = false, length = -1)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Transport transport = (Transport) o;

        if (id != transport.id) return false;
        if (name != null ? !name.equals(transport.name) : transport.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "transport")
    public Collection<Movement> getMovements() {
        return movements;
    }

    public void setMovements(Collection<Movement> movementssById) {
        this.movements = movementssById;
    }
}
