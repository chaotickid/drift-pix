package com.io.driftpix.service;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;

@Service
@Transactional
public class FileUploadService {

    public void uploadFile(MultipartFile file) throws IOException {
        try {

            String fileName = file.getOriginalFilename();
            long fileSize = file.getSize();
            String fileType = file.getContentType();

            // ✅ Store files in an external "uploads" folder
            String storageLocation = System.getProperty("user.dir") + "/uploads";

            // Ensure directory exists
            Path uploadPath = Paths.get(storageLocation);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Save file
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // Build response
            Map<String, Object> response = new HashMap<>();
            response.put("fileName", fileName);
            response.put("fileSize", fileSize);
            response.put("fileType", fileType);
            response.put("filePath", filePath.toString());
        } catch (Exception e) {
            throw e;
        }
    }
}
