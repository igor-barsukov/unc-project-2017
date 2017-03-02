package dao;


import javax.sql.DataSource;
import java.util.List;

/**
 * Created by qwerty on 02.03.2017.
 */
public interface JdbcDAO<T> {
    void setDataSource(DataSource dataSource);

    List list();

    void delete(Integer id);

    void saveOrUpdate(T obj);

    T get(Integer id);
}
