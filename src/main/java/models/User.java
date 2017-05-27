package models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Collection;

/**
 * Created by acer-pc on 07.03.2017.
 */
@Entity
@Table(name = "users", schema = "public", catalog = "TravelDB")
public class User implements Serializable {
    private Integer id;
    private String firstName;
    private Date birthday;
    private String lastName;
    private String password;
    private String email;
    private String info;
    private String userPhoto;
    @JsonIgnore
    private Collection<ChatTravel> chatTravels;
    @JsonIgnore
    private Collection<CommentPhoto> comments;
    @JsonIgnore
    private Collection<User> friends;
    @JsonIgnore
    private Collection<Message> sentMessages;
    @JsonIgnore
    private Collection<Message> receivedMessages;
    @JsonIgnore
    private Collection<Photo> photos;
    @JsonIgnore
    private Collection<PostOfTravel> postOfTravels;
    private City city;
    private Gender gender;
    private Role role;
    @JsonIgnore
    private Collection<UserToTravel> userToTravels;

    public User() {
    }

    public User(String firstName, Date birthday, String lastName, String password, String email, String info, String userPhoto, City city, Gender gender, Role role) {
        this.firstName = firstName;
        this.birthday = birthday;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.info = info;
        this.userPhoto = userPhoto;
        this.city = city;
        this.gender = gender;
        this.role = role;
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    @SequenceGenerator(name = "user_seq", sequenceName = "user_id_seq", allocationSize = 1)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "first_name", nullable = false, length = 50)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "birthday", nullable = true)
    @DateTimeFormat(pattern = "yyyy-M-dd")
    @Temporal(value = TemporalType.DATE )
    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    @Basic
    @Column(name = "last_name", nullable = true, length = 50)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Basic
    @JsonIgnore
    @Column(name = "password", nullable = false, length = 150)
    public String getPassword() {
        return password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "email", nullable = false, length = 100)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "info", nullable = true, length = -1)
    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    @Basic
    @Column(name = "user_photo", nullable = true, length = 100)
    public String getUserPhoto() {
        return userPhoto;
    }

    public void setUserPhoto(String userPhoto) {
        this.userPhoto = userPhoto;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (id != user.id) return false;
        if (firstName != null ? !firstName.equals(user.firstName) : user.firstName != null) return false;
        if (birthday != null ? !birthday.equals(user.birthday) : user.birthday != null) return false;
        if (lastName != null ? !lastName.equals(user.lastName) : user.lastName != null) return false;
        if (password != null ? !password.equals(user.password) : user.password != null) return false;
        if (email != null ? !email.equals(user.email) : user.email != null) return false;
        if (info != null ? !info.equals(user.info) : user.info != null) return false;
        if (userPhoto != null ? !userPhoto.equals(user.userPhoto) : user.userPhoto != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (firstName != null ? firstName.hashCode() : 0);
        result = 31 * result + (birthday != null ? birthday.hashCode() : 0);
        result = 31 * result + (lastName != null ? lastName.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (info != null ? info.hashCode() : 0);
        result = 31 * result + (userPhoto != null ? userPhoto.hashCode() : 0);
        return result;
    }


    @OneToMany( mappedBy = "sender")
    public Collection<ChatTravel> getChatTravels() {
        return chatTravels;
    }

    public void setChatTravels(Collection<ChatTravel> chatTravels) {
        this.chatTravels = chatTravels;
    }


    @OneToMany(mappedBy = "commentator")
    @JsonIgnore
    public Collection<CommentPhoto> getComments() {
        return comments;
    }

    public void setComments(Collection<CommentPhoto> comments) {
        this.comments = comments;
    }

   //?
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "friends", catalog = "TravelDB", joinColumns = {
            @JoinColumn(name = "user_1", nullable = false, updatable = false) },
            inverseJoinColumns = { @JoinColumn(name = "user_2",
                    nullable = false, updatable = false) })
    public Collection<User> getFriends() {
        return friends;
    }

    public void setFriends(Collection<User> friends1) {
        this.friends = friends1;
    }


    @OneToMany( mappedBy = "sender")
    public Collection<Message> getSentMessages() {
        return sentMessages;
    }

    public void setSentMessages(Collection<Message> sentMessages) {
        this.sentMessages = sentMessages;
    }


    @OneToMany(mappedBy = "recipient")
    public Collection<Message> getReceivedMessages() {
        return receivedMessages;
    }

    public void setReceivedMessages(Collection<Message> reseivedMessages) {
        this.receivedMessages = reseivedMessages;
    }


    @OneToMany(mappedBy = "owner")
    public Collection<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(Collection<Photo> photos) {
        this.photos = photos;
    }


    @OneToMany(mappedBy = "owner")
    public Collection<PostOfTravel> getPostOfTravels() {
        return postOfTravels;
    }

    public void setPostOfTravels(Collection<PostOfTravel> postOfTravels) {
        this.postOfTravels = postOfTravels;
    }

    @ManyToOne
    @JoinColumn(name = "city_id", referencedColumnName = "id")
    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    @ManyToOne
    @JoinColumn(name = "gender", referencedColumnName = "id", nullable = false)
    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    public Role getRole() {
        return role;
    }
    @JsonProperty
    public void setRole(Role role) {
        this.role = role;
    }


    @OneToMany(mappedBy = "PK.user")
    public Collection<UserToTravel> getUserToTravels() {
        return userToTravels;
    }

    public void setUserToTravels(Collection<UserToTravel> userToTravels) {
        this.userToTravels = userToTravels;
    }
}
