package services;

import models.Role;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface RoleService   extends CRUDService<Role, Integer>{
    Role getByName(String name);
}
