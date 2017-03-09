package models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "roles", schema = "public", catalog = "TravelDB")
public class Role implements Serializable {
    private Integer id;
    private String name;
    private Collection<User> users;
    private Collection<UserToTravel> userToTravels;

    public Role() {
    }

    public Role(String name) {
        this.name = name;

    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "role_seq")
    @SequenceGenerator(name = "role_seq", sequenceName = "roles_id_seq", allocationSize = 1)
    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
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

        Role role = (Role) o;

        if (id != role.id) return false;
        if (name != null ? !name.equals(role.name) : role.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "role")
    public Collection<User> getUsers() {
        return users;
    }

    public void setUsers(Collection<User> users) {
        this.users = users;
    }

    @OneToMany(mappedBy = "role")
    public Collection<UserToTravel> getUserToTravels() {
        return userToTravels;
    }

    public void setUserToTravels(Collection<UserToTravel> userToTravels) {
        this.userToTravels = userToTravels;
    }
}
