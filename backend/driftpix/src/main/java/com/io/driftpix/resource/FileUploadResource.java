package com.io.driftpix.resource;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/files")
public class FileUploadResource {
    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadFile(
            @RequestHeader(name = "secretKay") String secretKey,
            @RequestHeader(name = "secretKay") String accessKey,
            @RequestParam("file") MultipartFile file) throws IOException {

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

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
