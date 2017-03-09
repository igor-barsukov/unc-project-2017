package models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "photos", schema = "public", catalog = "TravelDB")
public class Photo implements Serializable {
    private Integer id;
    private String pathToPhoto;
    private Collection<CommentPhoto> comments;
    private Album album;
    private User owner;

    public Photo() {
    }

    public Photo(String pathToPhoto, Album album, User owner) {
        this.pathToPhoto = pathToPhoto;
        this.album = album;
        this.owner = owner;
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "photo_seq")
    @SequenceGenerator(name = "photo_seq", sequenceName = "photos_id_seq", allocationSize = 1)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "path_to_photo", nullable = false, length = 100)
    public String getPathToPhoto() {
        return pathToPhoto;
    }

    public void setPathToPhoto(String pathToPhoto) {
        this.pathToPhoto = pathToPhoto;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Photo photo = (Photo) o;

        if (id != photo.id) return false;
        if (pathToPhoto != null ? !pathToPhoto.equals(photo.pathToPhoto) : photo.pathToPhoto != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (pathToPhoto != null ? pathToPhoto.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "photo")
    public Collection<CommentPhoto> getComments() {
        return comments;
    }

    public void setComments(Collection<CommentPhoto> comments) {
        this.comments = comments;
    }

    @ManyToOne
    @JoinColumn(name = "album_id", referencedColumnName = "id", nullable = false)
    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    @ManyToOne
    @JoinColumn(name = "owner_id", referencedColumnName = "id", nullable = false)
    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }
}
