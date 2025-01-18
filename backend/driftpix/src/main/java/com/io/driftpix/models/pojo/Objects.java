package com.io.driftpix.models.pojo;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "objects")
@Data
public class Objects {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String objectName;

    private String type;

    private String size;

    private String storageClass;

    private String owner;

    private String path;

    @ManyToOne
    private Bucket bucket;

}
