package com.io.driftpix.repository;


import com.io.driftpix.models.pojo.AllowedFileType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllowedFileTypeRepo extends JpaRepository<AllowedFileType, Integer> {
}