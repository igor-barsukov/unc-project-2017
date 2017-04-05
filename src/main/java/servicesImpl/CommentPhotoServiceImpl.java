package servicesImpl;

import models.CommentPhoto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.CommentPhotoRepository;
import services.CommentPhotoService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
@Service
public class CommentPhotoServiceImpl implements CommentPhotoService {

    @Autowired
    private CommentPhotoRepository commentPhotoRepository;

    @Transactional
    public CommentPhoto addOrUpdate(CommentPhoto obj) {
        return commentPhotoRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<CommentPhoto> getAll() {
        return commentPhotoRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        commentPhotoRepository.delete(id);
    }
    @Transactional
    public CommentPhoto get(Integer id) {
        return commentPhotoRepository.findOne(id);
    }
}
