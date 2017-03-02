package dao;

import model.Travels;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by qwerty on 02.03.2017.
 */
public class TravelsDAOImpl<T> implements JdbcDAO<T> {

    private DataSource dataSource;
    private JdbcTemplate jdbcTemplate;

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List list() {
        String SQL = "select * from Travels";


        List<Travels> listTravels = jdbcTemplate.query(SQL, new RowMapper<Travels>() {

            public Travels mapRow(ResultSet rs, int rowNum) throws SQLException {
                Travels travel = new Travels();

                travel.setId(rs.getInt("id"));
                travel.setName(rs.getString("name"));
                travel.setStartDate(rs.getString("start_date"));
                travel.setEndDate(rs.getString("end_date"));
                travel.setInfo(rs.getString("info"));
                travel.setActive(rs.getBoolean("is_active"));

                return travel;
            }

        });

        return listTravels;
    }

    public void delete(Integer id) {
        String sql = "DELETE FROM Travels WHERE id=?";
        jdbcTemplate.update(sql, id);
    }

    public void saveOrUpdate(T obj) {
        Travels travel;
        travel = (Travels) obj;
        if (travel.getId() != null) {
            // update
            String sql = "UPDATE Travels SET name=?, start_date=?, end_date=?, info=?, is_active=? WHERE id=?";
            jdbcTemplate.update(sql, travel.getName(),  java.sql.Date.valueOf(travel.getStartDate()),java.sql.Date.valueOf( travel.getEndDate()), travel.getInfo(), travel.getActive(),travel.getId());
        } else {
            // insert
            String sql = "INSERT INTO Travels (id, name, start_date, end_date, info, is_active)"
                    + " VALUES (DEFAULT, ?, ?, ?, ?, ?)";
            jdbcTemplate.update(sql, travel.getName(), java.sql.Date.valueOf(travel.getStartDate()),java.sql.Date.valueOf( travel.getEndDate()), travel.getInfo(), travel.getActive());
        }
    }

    public T get(Integer id) {
        String SQL = "select * from Travels where id=?";
        Travels travels = jdbcTemplate.queryForObject(SQL, new Object[]{id}, new RowMapper<Travels>() {

            public Travels mapRow(ResultSet rs, int rowNum) throws SQLException {
                Travels travel = new Travels();

                travel.setId(rs.getInt("id"));
                travel.setName(rs.getString("name"));
                travel.setStartDate(rs.getString("start_date"));
                travel.setEndDate(rs.getString("end_date"));
                travel.setInfo(rs.getString("info"));
                travel.setActive(rs.getBoolean("is_active"));


                return travel;
            }

        });

        return (T) travels;
    }


}
