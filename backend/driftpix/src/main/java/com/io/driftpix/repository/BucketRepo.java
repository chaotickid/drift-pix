package com.io.driftpix.repository;

import com.io.driftpix.models.pojo.Bucket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BucketRepo extends JpaRepository<Bucket, Integer> {
}
