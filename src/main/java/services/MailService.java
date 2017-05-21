package services;


import com.sun.javafx.collections.MappingChange;

import java.util.Map;

public interface MailService {
    boolean sendEmail (final String templateName, final Map<String, Object> model);
}
