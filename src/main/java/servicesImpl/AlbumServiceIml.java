package servicesImpl;

import models.Album;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.AlbumRepository;
import services.AlbumService;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */

@Service
public class AlbumServiceIml implements AlbumService {
    @Autowired
    private AlbumRepository albumRepository;

    @Transactional
    public Album addOrUpdate(Album obj) {
        return albumRepository.saveAndFlush(obj);
    }
    @Transactional
    public List<Album> getAll() {
        return albumRepository.findAll();
    }
    @Transactional
    public void delete(Integer id) {
        albumRepository.delete(id);
    }
    @Transactional
    public Album get(Integer id) {
        return albumRepository.findOne(id);
    }
}
