package dao;

import model.Plans;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by qwerty on 04.03.2017.
 */
public class PlansDAOImpl<T> implements JdbcDAO<T> {

    private DataSource dataSource;
    private JdbcTemplate jdbcTemplate;

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List list() {

        String SQL = "select * from plans";


        List<Plans> listPlans = jdbcTemplate.query(SQL, new RowMapper<Plans>() {

            public Plans mapRow(ResultSet rs, int rowNum) throws SQLException {
                Plans plan = new Plans();

                plan.setId(rs.getInt("id"));
                plan.setName(rs.getString("name"));
                plan.setTravelID(rs.getInt("travel_id"));
                plan.setStartDate(rs.getString("start_date"));
                plan.setEndDate(rs.getString("end_date"));
                plan.setInfo(rs.getString("info"));
                plan.setCityID(rs.getInt("city_id"));
                plan.setActive(rs.getBoolean("is_active"));
                plan.setLatitude(rs.getString("latitude"));
                plan.setLongitude(rs.getString("longitude"));

                return plan;
            }

        });

        return listPlans;
    }

    public void delete(Integer id) {
        String sql = "DELETE FROM plans WHERE id=?";
        jdbcTemplate.update(sql, id);
    }

    public void saveOrUpdate(T obj) {
        Plans plan;
        plan = (Plans) obj;
        if (plan.getId() != null) {
            // update
            String sql = "UPDATE plans SET name=?,  travel_id=?, start_date=?, end_date=?, info =?, city_id =?, is_active =?, latitude =?, longitude =? WHERE id=?";
            jdbcTemplate.update(sql, plan.getName(), plan.getTravelID(), java.sql.Date.valueOf(plan.getStartDate()), java.sql.Date.valueOf(plan.getEndDate()),
                    plan.getId(), plan.getCityID(), plan.isActive(), plan.getLatitude(), plan.getLongitude(), plan.getId());
        } else {
            // insert
            String sql = "INSERT INTO plans (id, name, travel_id, start_date, end_date, info, city_id, is_active, latitude, longitude)"
                    + " VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            jdbcTemplate.update(sql, plan.getName(), plan.getTravelID(),  java.sql.Date.valueOf(plan.getStartDate()), java.sql.Date.valueOf(plan.getEndDate()),
                    plan.getId(), plan.getCityID(), plan.isActive(), plan.getLatitude(), plan.getLongitude());
        }
    }

    public T get(Integer id) {
        String SQL = "select * from plans where id=?";
        Plans plan = jdbcTemplate.queryForObject(SQL, new Object[]{id}, new RowMapper<Plans>() {

            public Plans mapRow(ResultSet rs, int rowNum) throws SQLException {
                Plans plan = new Plans();

                plan.setId(rs.getInt("id"));
                plan.setName(rs.getString("name"));
                plan.setTravelID(rs.getInt("travel_id"));
                plan.setStartDate(rs.getString("start_date"));
                plan.setEndDate(rs.getString("end_date"));
                plan.setInfo(rs.getString("info"));
                plan.setCityID(rs.getInt("city_id"));
                plan.setActive(rs.getBoolean("is_active"));
                plan.setLatitude(rs.getString("latitude"));
                plan.setLongitude(rs.getString("longitude"));

                return plan;
            }

        });

        return (T) plan;
    }
}
