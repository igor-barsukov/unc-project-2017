package servicesImpl;

import models.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.RoleRepository;
import services.RoleService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Transactional
    public Role addOrUpdate(Role obj) {
        return roleRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<Role> getAll() {
        return roleRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        roleRepository.delete(id);
    }
    @Transactional
    public Role get(Integer id) {
        return roleRepository.findOne(id);
    }
    @Transactional
    public Role getByName(String name) {
        return roleRepository.findByName(name);
    }
}
