package controllers;


import models.FileModel;
import org.apache.commons.codec.binary.Hex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletContext;
import java.io.File;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


/**
 * Created by qwerty on 12.05.2017.
 */
@RestController
public class FileUploadController {


    @Autowired
    ServletContext context;

    @RequestMapping(value = "/fileUploadPage", method = RequestMethod.GET)
    public ModelAndView fileUploadPage() {
        FileModel file = new FileModel();
        ModelAndView modelAndView = new ModelAndView("fileUpload", "command", file);
        return modelAndView;
    }

//    @RequestMapping(value="/fileUploadPage", method = RequestMethod.POST)
//    public String fileUpload(@Validated FileModel file, BindingResult result, ModelMap model) throws IOException, NoSuchAlgorithmException {
//        if (result.hasErrors()) {
//            System.out.println("validation errors");
//            return "fileUploadPage";
//        } else {
//                //writeFile
//                MultipartFile multipartFile = file.getFile();
//                String uploadPath = "C:\\Program Files\\Apache Software Foundation\\Apache Tomcat 8.0.27\\images\\";
//
//                String hash = sha256(multipartFile);
//
//                FileCopyUtils.copy(file.getFile().getBytes(), new File(uploadPath + hash));
//                String fileName = multipartFile.getOriginalFilename();
//
//                model.addAttribute("fileName", fileName);
//                return "success";
//            }
//        }

//    @RequestMapping(value="/fileUploadPage", method = RequestMethod.POST)
//    public String fileUpload(@Validated FileModel file, ModelMap model) throws IOException, NoSuchAlgorithmException {
//
//        //writeFile
//        MultipartFile multipartFile = file.getFile();
//        String uploadPath = "C:\\Program Files\\Apache Software Foundation\\Apache Tomcat 8.0.27\\images\\";
//
//        String hash = sha256(multipartFile);
//
//        FileCopyUtils.copy(file.getFile().getBytes(), new File(uploadPath + hash));
//
//        //model.addAttribute("fileName", uploadPath + hash);
//        return uploadPath + hash;
//    }


    @RequestMapping(value="/fileUploadPage", method = RequestMethod.POST)
    public String fileUpload(FileModel file) throws IOException, NoSuchAlgorithmException {
        //writeFile
        MultipartFile multipartFile = file.getFile();


        String uploadPath1 = "D:\\Новая папка\\target\\unc-project\\";
        String uploadPath2 = "assets\\img\\";

        String hash = sha256(multipartFile);

        File file1 = new File(uploadPath1 + uploadPath2 + hash+ ".jpg");
        FileCopyUtils.copy(file.getFile().getBytes(), file1);

        return uploadPath2 + hash+ ".jpg";
    }

    String sha256(MultipartFile file) throws NoSuchAlgorithmException, IOException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        md.update(file.getBytes());
        byte[] digest = md.digest();
        return new String(Hex.encodeHexString(digest));
    }

    boolean accept(MultipartFile file, String s) {
        return file.getOriginalFilename().toLowerCase().endsWith(s);
    }
}