package com.io.driftpix.models.pojo;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "allowed_file_type")
@Data
public class AllowedFileType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String fileType;

    @ManyToOne
    private Bucket bucket;
}
