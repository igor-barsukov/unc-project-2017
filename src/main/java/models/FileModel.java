package models;

import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;

/**
 * Created by qwerty on 12.05.2017.
 */
public class FileModel implements Serializable {
    private MultipartFile file;

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
}
