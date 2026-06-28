package com.portfolio.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "personal_info")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PersonalInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String title;
    private String tagline;
    private String location;
    private String email;
    private String phone;
    private String githubUrl;
    private String linkedinUrl;
    private String leetcodeUrl;
    private String resumeUrl;

    @Column(columnDefinition = "TEXT")
    private String about;
}
