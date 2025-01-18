package com.io.driftpix.models.viewmodel;

import lombok.Data;

import java.util.List;

@Data
public class BucketVM {

    private String bucketName;

    private Integer maxFileSize;

    private String driftPixRegion;

    private String driftPixSecretKey;

    private String driftPixAccessKey;

    private List<String> allowedFileType;

    private String owner;

    private Double size;

    private String entityTag;

}