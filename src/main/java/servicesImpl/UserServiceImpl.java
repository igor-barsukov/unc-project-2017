package servicesImpl;

/**
 * Created by acer-pc on 08.03.2017.
 */

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import repositories.UserRepository;
import models.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import services.UserService;
@Transactional
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;

    @Transactional
    public User addOrUpdate(User user) {
        return  userRepository.saveAndFlush(user);
    }

    @Transactional
    public void delete(Integer id) {
        userRepository.delete(id);
    }

    @Transactional
    public List<User> getByFirstNameAndLastName(String firstName, String lastName) {
        return userRepository.findByFirstName(firstName);
    }

    @Transactional
    public User get(Integer id){
        return  userRepository.findOne(id);
    }

    @Transactional
    public List<User> getAll() {
        return  userRepository.findAll();
    }

    @Transactional
    public  User getByEmail(String email){
        return  userRepository.findByEmail(email);
    }

    @Transactional
    public User getByCredentials(String email, String password){
        return userRepository.findByEmailAndPassword(email,password);
    }

}
