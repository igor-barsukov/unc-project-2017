package services;

import models.Photo;

import java.util.List;

/**
 * Created by acer-pc on 08.03.2017.
 */
public interface PhotoService  extends CRUDService<Photo, Integer> {
    List<Photo> getPhotosByOwner(Integer owner);
}
