package com.portfolio.dto;

import com.portfolio.model.Experience;
import com.portfolio.model.PersonalInfo;
import com.portfolio.model.Project;
import com.portfolio.model.Skill;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PortfolioResponse {
    private PersonalInfo personalInfo;
    private List<Skill> skills;
    private List<Experience> experiences;
    private List<Project> projects;
}
