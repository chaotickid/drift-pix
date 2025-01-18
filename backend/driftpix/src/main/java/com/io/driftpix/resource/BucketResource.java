package com.io.driftpix.resource;

import com.io.driftpix.models.viewmodel.BucketVM;
import com.io.driftpix.service.BucketService;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/api/bucket")
public class BucketResource {

    @Autowired
    private BucketService bucketService;

    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createBucket(@RequestBody BucketVM bucketVM) {
        return new ResponseEntity<>(bucketService.createBucket(bucketVM), HttpStatus.CREATED);
    }
}
