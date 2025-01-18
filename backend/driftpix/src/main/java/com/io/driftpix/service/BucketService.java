package com.io.driftpix.service;

import com.io.driftpix.models.pojo.AllowedFileType;
import com.io.driftpix.models.pojo.Bucket;
import com.io.driftpix.models.viewmodel.BucketVM;
import com.io.driftpix.repository.AllowedFileTypeRepo;
import com.io.driftpix.repository.BucketRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.UUID;

@Service
@Transactional
public class BucketService {

    @Autowired
    private BucketRepo bucketRepo;

    @Autowired
    private AllowedFileTypeRepo allowedFileTypeRepo;

    public BucketVM createBucket(BucketVM bucketVM) {
        try {
            Bucket bucket = new Bucket();
            bucket.setBucketName(bucketVM.getBucketName());
            bucket.setMaxFileSize(bucketVM.getMaxFileSize());
            bucket.setBucketName(bucketVM.getBucketName());
            bucket.setDriftPixAccessKey(bucketVM.getDriftPixAccessKey());
            bucket.setDriftPixSecretKey(bucketVM.getDriftPixSecretKey());
            bucket.setDriftPixRegion(bucketVM.getDriftPixRegion());
            bucket.setOwner("ROOT");
            bucket.setBucketSizeAsOfNow(0);
            bucket.setEntityTag(UUID.randomUUID().toString());
            Bucket savedBucket = bucketRepo.save(bucket);
            //add validation as well as make db call for allowed file types
            if (!CollectionUtils.isEmpty(bucketVM.getAllowedFileType())) {
                bucketVM.getAllowedFileType().forEach(fileType -> {
                    //add validation before db calls
                    AllowedFileType allowedFileType = new AllowedFileType();
                    allowedFileType.setFileType(fileType);
                    allowedFileTypeRepo.save(allowedFileType);
                    //add allowed file type to bucket
                    //savedBucket.addAllowedFileTypeToBucket(allowedFileType);
                });

            }
        } catch (Exception e) {
            throw e;
        }
        return bucketVM;
    }
}
