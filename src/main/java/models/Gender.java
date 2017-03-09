package models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "genders", schema = "public", catalog = "TravelDB")
public class Gender implements Serializable {
    private Integer id;
    private String gender;
    private Collection<User> users;

    public Gender() {
    }

    public Gender(String gender) {
        this.gender = gender;

    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "gender_seq")
    @SequenceGenerator(name = "gender_seq", sequenceName = "genders_id_seq", allocationSize = 1)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "gender", nullable = false, length = 20)
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Gender gender1 = (Gender) o;

        if (id != gender1.id) return false;
        if (gender != null ? !gender.equals(gender1.gender) : gender1.gender != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (gender != null ? gender.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "gender")
    public Collection<User> getUsers() {
        return users;
    }

    public void setUsers(Collection<User> users) {
        this.users = users;
    }
}
