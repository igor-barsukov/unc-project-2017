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
        PGpoint result = null;
        final Object point = resultSet.getObject(names[0]);
        if (!resultSet.wasNull()) {
            result = new PGpoint();
            result.setValue(point.toString());
        }
        return result;
    }



    public void nullSafeSet(PreparedStatement statement, Object value, int index, SharedSessionContractImplementor sharedSessionContractImplementor)
            throws HibernateException, SQLException
    {
        if (value == null) {
            statement.setObject(index, new PGpoint(0.0, 0.0));
        } else {
            PGpoint v = (PGpoint) value;
            statement.setObject(index, value);
        }
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


        public Object replace(Object original, Object target, Object owner) throws HibernateException {
        if (original instanceof PGpoint) {
            final PGpoint value = (PGpoint) original;
            return new PGpoint(value.x, value.y);
        } else {
            return new PGpoint(0.0, 0.0);
        }
    }


    public int[] sqlTypes()
    {
        return new int[]
                {
                        Types.VARCHAR
                };
    }

}

