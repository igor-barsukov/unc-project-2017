package services;

import javax.sql.DataSource;
import java.util.List;

/**
 * Created by qwerty on 04.03.2017.
 */
public interface CRUDService<T, V> {

    T addOrUpdate(T obj);

    List<T> getAll();

    void delete(V id);

    T get(V id);
}
