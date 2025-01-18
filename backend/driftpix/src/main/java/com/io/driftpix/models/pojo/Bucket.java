package com.io.driftpix.models.pojo;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "bucket")
@Data
public class Bucket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String bucketName;

    private long maxFileSize;

    private String driftPixRegion;

    private String driftPixSecretKey;

    private String driftPixAccessKey;

    private String allowedFileType;

    private String owner;

    private long bucketSizeAsOfNow;

    private String entityTag;

    @OneToMany(orphanRemoval = true, mappedBy = "bucket", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    public List<AllowedFileType> allowedFileTypeList = new ArrayList<>();

    @OneToMany(orphanRemoval = true, mappedBy = "bucket", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    public List<Objects> objectsList = new ArrayList<>();

    //helper methods
//    public void addAllowedFileTypeToBucket(AllowedFileType allowedFileType) {
//        this.getAllowedFileTypeList().add(allowedFileType);
//        allowedFileType.setBucket(this);
//    }
//
//    public void removeAllowedFileTypeFromBucket(AllowedFileType allowedFileType) {
//        this.getAllowedFileTypeList().remove(allowedFileType);
//        allowedFileType.setBucket(null);
//    }
//
//    public void addObjectToBucket(Objects objects) {
//        this.getObjectsList().add(objects);
//        objects.setBucket(this);
//    }
//
//    public void removeObjectFromBucket(Objects objects) {
//        this.getObjectsList().remove(objects);
//        objects.setBucket(null);
//    }
}