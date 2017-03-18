package models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "cities", schema = "public", catalog = "TravelDB")
public class City implements Serializable {
    private Integer id;
    private String name;
    private State state;
    @JsonIgnore
    private Collection<Plan> plans;
    @JsonIgnore
    private Collection<User> users;

    public City() {
    }

    public City(String name, State state) {
        this.name = name;
        this.state = state;
    }


    @Id
    @Column(name = "city_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_seq")
    @SequenceGenerator(name = "city_seq", sequenceName = "cities_city_id_seq", allocationSize = 1)
    public Integer getId() {
        return id;
    }

    public void setId(Integer cityId) {
        this.id = cityId;
    }

    @Basic
    @Column(name = "name", nullable = false, length = 50)
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

        City city = (City) o;

        if (id !=city.id) return false;
        if (name != null ? !name.equals(city.name) : city.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "state_id", referencedColumnName = "id", nullable = false)
    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    @OneToMany(mappedBy = "city")
    public Collection<Plan> getPlans() {
        return plans;
    }

    public void setPlans(Collection<Plan> plans) {
        this.plans = plans;
    }

    @OneToMany(mappedBy = "city")
    public Collection<User> getUsers() {
        return users;
    }

    public void setUsers(Collection<User> users) {
        this.users = users;
    }
}
