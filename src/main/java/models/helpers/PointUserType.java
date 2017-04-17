package models.helpers;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.usertype.UserType;
import org.postgresql.geometric.PGpoint;

import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by acer-pc on 17.04.2017.
 */
public class PointUserType implements UserType {



    @SuppressWarnings("rawtypes")
    public Class returnedClass()
    {
        return PGpoint.class;
    }


    public boolean equals(Object o, Object o1) throws HibernateException
    {
        boolean isEqual = false;
        if (o == o1)
        {
            isEqual = true;
        }
        if (o == null || o1 == null)
        {
            isEqual = false;
        }
        else
        {
            isEqual = o.equals(o1);
        }
        return isEqual;
    }


    public int hashCode(Object o) throws HibernateException
    {
        return o.hashCode();
    }

    public Object nullSafeGet(ResultSet resultSet, String[] names,SharedSessionContractImplementor sharedSessionContractImplementor, Object owner)
            throws HibernateException, SQLException
    {
        assert names.length == 1;
        if (resultSet.wasNull())
        {
            return null;
        }
        final PGpoint point = new PGpoint(resultSet.getObject(names[0]).toString());
        return point;
    }


    public void nullSafeSet(PreparedStatement statement, Object value, int index, SharedSessionContractImplementor sharedSessionContractImplementor)
            throws HibernateException, SQLException
    {
        statement.setObject(index, value);
    }



    public Object deepCopy(Object o) throws HibernateException
    {
        return (Serializable) o;
    }


    public boolean isMutable()
    {
        return true;
    }


    public Serializable disassemble(Object o) throws HibernateException
    {
        return (Serializable) o;
    }


    public Object assemble(Serializable serializable, Object o) throws HibernateException
    {
        return serializable;
    }

    public Object replace(Object o1, Object o2, Object o3) throws HibernateException
    {
        return this;
    }

    public int[] sqlTypes()
    {
        return new int[]
                {
                        Types.VARCHAR
                };
    }

}

