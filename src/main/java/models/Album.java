package models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Collection;

/**
 * Created by acer-pc on 07.03.2017.
 */


@Entity
@Table(name = "albums", schema = "public", catalog = "TravelDB")
public class Album implements Serializable {
    private Integer id;
    private String name;
    private Date createDate;
    private String description;
    private Travel travel;
    @JsonIgnore
    private Collection<Photo> photos;

    public Album() {
    }

    public Album(String name, Date createDate, String description, Travel travel) {
        this.name = name;
        this.createDate = createDate;
        this.description = description;
        this.travel = travel;
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "album_seq")
    @SequenceGenerator(name = "album_seq", sequenceName = "albums_id_seq", allocationSize = 1)
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
    @Column(name = "create_date", nullable = false)
    @DateTimeFormat(pattern = "yyyy-M-dd")
    @Temporal(value = TemporalType.DATE )
    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    @Basic
    @Column(name = "description", nullable = true, length = -1)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Album album = (Album) o;

        if (id!=album.id) return false;
        if (name != null ? !name.equals(album.name) : album.name != null) return false;
        if (createDate != null ? !createDate.equals(album.createDate) : album.createDate != null) return false;
        if (description != null ? !description.equals(album.description) : album.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (createDate != null ? createDate.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "travel_id", referencedColumnName = "id", nullable = false)
    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travel) {
        this.travel = travel;
    }

    @OneToMany(mappedBy = "album")
    public Collection<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(Collection<Photo> photos) {
        this.photos = photos;
    }
}
