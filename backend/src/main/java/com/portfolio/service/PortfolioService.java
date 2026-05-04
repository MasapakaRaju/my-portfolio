package com.portfolio.service;

import com.portfolio.dto.PortfolioResponse;
import com.portfolio.model.Experience;
import com.portfolio.model.PersonalInfo;
import com.portfolio.model.Project;
import com.portfolio.model.Skill;
import com.portfolio.repository.ExperienceRepository;
import com.portfolio.repository.PersonalInfoRepository;
import com.portfolio.repository.ProjectRepository;
import com.portfolio.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PortfolioService {

    private final PersonalInfoRepository personalInfoRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final ProjectRepository projectRepository;

    public PortfolioResponse getAll() {
        PersonalInfo info = personalInfoRepository.findAll().stream().findFirst().orElse(null);
        List<Skill> skills = skillRepository.findAllByOrderByCategory();
        List<Experience> experiences = experienceRepository.findAllByOrderByDisplayOrderAsc();
        List<Project> projects = projectRepository.findAllByOrderByDisplayOrderAsc();
        return new PortfolioResponse(info, skills, experiences, projects);
    }
}
