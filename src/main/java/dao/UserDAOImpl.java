package dao;

import model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by qwerty on 04.03.2017.
 */
public class UserDAOImpl<T> implements JdbcDAO<T> {
    private DataSource dataSource;
    private JdbcTemplate jdbcTemplate;

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List list() {

        String SQL = "select * from public.user";


        List<User> listUser = jdbcTemplate.query(SQL, new RowMapper<User>() {

            public User mapRow(ResultSet rs, int rowNum) throws SQLException {
                User user = new User();

                user.setId(rs.getInt("id"));
                user.setFirstName(rs.getString("first_name"));
                user.setLastName(rs.getString("last_name"));
                user.setBirthday(rs.getString("birthday"));
                user.setInfo(rs.getString("info"));
                user.setCityID(rs.getInt("city_id"));
                user.setEmail(rs.getString("email"));
                user.setGender(rs.getInt("gender"));
                user.setPassword(rs.getString("password"));
                user.setRoleID(rs.getInt("id_role"));
                user.setUserPhoto(rs.getString("user_photo"));

                return user;
            }

        });

        return listUser;
    }

    public void delete(Integer id) {
        String sql = "DELETE FROM public.user WHERE id=?";
        jdbcTemplate.update(sql, id);
    }

    public void saveOrUpdate(T obj) {
        User user;
        user = (User) obj;
        if (user.getId() != null) {
            // update
            String sql = "UPDATE public.user SET first_name=?,  birthday=?, city_id=?, last_name=?, password =?, email =?, gender =?, info =?, id_role =?, user_photo =? WHERE id=?";
            jdbcTemplate.update(sql, user.getFirstName(), java.sql.Date.valueOf(user.getBirthday()), user.getCityID(), user.getLastName(), user.getPassword(), user.getEmail(),
                    user.getGender(), user.getInfo(), user.getRoleID(), user.getUserPhoto(), user.getId());
        } else {
            // insert
            String sql = "INSERT INTO public.user (id, first_name, birthday, city_id, last_name, password, email, gender, info, id_role, user_photo)"
                    + " VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            jdbcTemplate.update(sql, user.getFirstName(), java.sql.Date.valueOf(user.getBirthday()), user.getCityID(), user.getLastName(), user.getPassword(), user.getEmail(),
                    user.getGender(), user.getInfo(), user.getRoleID(), user.getUserPhoto());
        }
    }

    public T get(Integer id) {
        String SQL = "select * from public.user where id=?";
        User user = jdbcTemplate.queryForObject(SQL, new Object[]{id}, new RowMapper<User>() {

            public User mapRow(ResultSet rs, int rowNum) throws SQLException {
                User user = new User();

                user.setId(rs.getInt("id"));
                user.setFirstName(rs.getString("first_name"));
                user.setLastName(rs.getString("last_name"));
                user.setBirthday(rs.getString("birthday"));
                user.setCityID(rs.getInt("city_id"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
                user.setGender(rs.getInt("gender"));
                user.setInfo(rs.getString("info"));
                user.setRoleID(rs.getInt("id_role"));
                user.setUserPhoto(rs.getString("user_photo"));


                return user;
            }

        });

        return (T) user;
    }
}
