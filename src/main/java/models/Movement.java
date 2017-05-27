package models;

import org.hibernate.annotations.Type;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;
import org.postgresql.geometric.PGpoint;


@Entity
@Table(name = "movements", schema = "public", catalog = "TravelDB")
public class Movement {
    private int id;
    private Date startTime;
    private Date endTime;
    private String startAddress;
    private String destinationAddress;
    private Double price;
    private Integer distance;
    private String description;
    private String ticket;
    private Transport transport;
    private Travel travel;

    private PGpoint start_coordinates;
    private PGpoint destination_coordinates;

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "movement_seq")
    @SequenceGenerator(name = "movement_seq", sequenceName = "movements_id_seq", allocationSize = 1)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "start_time", nullable = false)
    @DateTimeFormat(pattern = "yyyy-M-dd HH:mm")
    @Temporal(value = TemporalType.TIMESTAMP)
    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }



    @Basic
    @Column(name = "end_time", nullable = false)
    @DateTimeFormat(pattern = "yyyy-M-dd HH:mm")
    @Temporal(value = TemporalType.TIMESTAMP)
    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }


    @Basic
    @Column(name = "start_address", nullable = true)
    public String getStartAddress() {
        return startAddress;
    }

    public void setStartAddress(String startAddress) {
        this.startAddress = startAddress;
    }

    @Basic
    @Column(name = "destination_address", nullable = true, length = -1)
    public String getDestinationAddress() {
        return destinationAddress;
    }

    public void setDestinationAddress(String destinationAddress) {
        this.destinationAddress = destinationAddress;
    }

    @Basic
    @Column(name = "price", nullable = true, precision = 0)
    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Basic
    @Column(name = "distance", nullable = true)
    public Integer getDistance() {
        return distance;
    }

    public void setDistance(Integer distance) {
        this.distance = distance;
    }

    @Basic
    @Column(name = "description", nullable = true)
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

        Movement movement = (Movement) o;

        if (id != movement.id) return false;
        if (startTime != null ? !startTime.equals(movement.startTime) : movement.startTime != null) return false;
        if (endTime != null ? !endTime.equals(movement.endTime) : movement.endTime != null) return false;
        if (startAddress != null ? !startAddress.equals(movement.startAddress) : movement.startAddress != null)
            return false;
        if (destinationAddress != null ? !destinationAddress.equals(movement.destinationAddress) : movement.destinationAddress != null)
            return false;
        if (price != null ? !price.equals(movement.price) : movement.price != null) return false;
        if (distance != null ? !distance.equals(movement.distance) : movement.distance != null) return false;
        if (description != null ? !description.equals(movement.description) : movement.description != null)
            return false;
        if (ticket != null ? !ticket.equals(movement.ticket) : movement.ticket != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (startTime != null ? startTime.hashCode() : 0);
        result = 31 * result + (endTime != null ? endTime.hashCode() : 0);
        result = 31 * result + (startAddress != null ? startAddress.hashCode() : 0);
        result = 31 * result + (destinationAddress != null ? destinationAddress.hashCode() : 0);
        result = 31 * result + (price != null ? price.hashCode() : 0);
        result = 31 * result + (distance != null ? distance.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (ticket != null ? ticket.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "transport_id", referencedColumnName = "id", nullable = false)
    public Transport getTransport() {
        return transport;
    }

    public void setTransport(Transport transportsByTransportId) {
        this.transport = transportsByTransportId;
    }

    @ManyToOne
    @JoinColumn(name = "travel_id", referencedColumnName = "id", nullable = false)
    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travelsByTravelId) {
        this.travel = travelsByTravelId;
    }

    @Basic
    @Column(name = "ticket", nullable = true)
    public String getTicket() {
        return ticket;
    }

    public void setTicket(String ticket) {
        this.ticket = ticket;
    }

    @Basic
    @Column(name = "start_coordinates",columnDefinition="point", nullable = true)
    @Type(type = "models.helpers.PointUserType")
    public PGpoint getStart_coordinates() {
        return start_coordinates;
    }

    public void setStart_coordinates(PGpoint start_coordinates) {
        this.start_coordinates = start_coordinates;
    }
    @Basic
    @Column(name = "destination_coordinates",columnDefinition="point", nullable = true)
    @Type(type = "models.helpers.PointUserType")
    public PGpoint getDestination_coordinates() {
        return destination_coordinates;
    }

    public void setDestination_coordinates(PGpoint destination_coordinates) {
        this.destination_coordinates = destination_coordinates;
    }
}
