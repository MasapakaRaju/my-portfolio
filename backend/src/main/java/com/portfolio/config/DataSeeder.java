package com.portfolio.config;

import com.portfolio.model.Experience;
import com.portfolio.model.PersonalInfo;
import com.portfolio.model.Project;
import com.portfolio.model.Skill;
import com.portfolio.repository.ExperienceRepository;
import com.portfolio.repository.PersonalInfoRepository;
import com.portfolio.repository.ProjectRepository;
import com.portfolio.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final PersonalInfoRepository personalInfoRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final ProjectRepository projectRepository;

    @Override
    public void run(String... args) {
        if (personalInfoRepository.count() == 0) seedPersonalInfo();
        if (skillRepository.count() == 0) seedSkills();
        if (experienceRepository.count() == 0) seedExperience();
        if (projectRepository.count() == 0) seedProjects();
    }

    private void seedPersonalInfo() {
        PersonalInfo info = new PersonalInfo();
        info.setName("Your Name Here");
        info.setTitle("Full Stack Developer");
        info.setTagline("Building elegant solutions to complex problems");
        info.setLocation("Your City, Country");
        info.setEmail("your.email@example.com");
        info.setPhone("+1 (555) 123-4567");
        info.setGithubUrl("https://github.com/yourusername");
        info.setLinkedinUrl("https://linkedin.com/in/yourusername");
        info.setResumeUrl("#");
        info.setAbout(
            "I'm a passionate Full Stack Developer with 3+ years of experience building " +
            "scalable web applications. I specialize in Java and Spring Boot on the backend, " +
            "and React with TypeScript on the frontend. I love solving real-world problems " +
            "through clean, maintainable code and thoughtful system design. " +
            "When I'm not coding, I enjoy contributing to open source and exploring new technologies."
        );
        personalInfoRepository.save(info);
    }

    private void seedSkills() {
        List<Skill> skills = Arrays.asList(
            new Skill(null, "Java", "Backend", 90),
            new Skill(null, "Spring Boot", "Backend", 85),
            new Skill(null, "Spring Security", "Backend", 75),
            new Skill(null, "REST APIs", "Backend", 90),
            new Skill(null, "Microservices", "Backend", 70),
            new Skill(null, "React", "Frontend", 85),
            new Skill(null, "TypeScript", "Frontend", 80),
            new Skill(null, "JavaScript", "Frontend", 85),
            new Skill(null, "HTML5", "Frontend", 90),
            new Skill(null, "CSS3", "Frontend", 85),
            new Skill(null, "PostgreSQL", "Database", 80),
            new Skill(null, "MySQL", "Database", 75),
            new Skill(null, "MongoDB", "Database", 65),
            new Skill(null, "Redis", "Database", 60),
            new Skill(null, "Git", "Tools", 90),
            new Skill(null, "Docker", "Tools", 70),
            new Skill(null, "Maven", "Tools", 80),
            new Skill(null, "IntelliJ IDEA", "Tools", 90),
            new Skill(null, "VS Code", "Tools", 85),
            new Skill(null, "AWS", "Cloud", 65),
            new Skill(null, "Heroku", "Cloud", 70)
        );
        skillRepository.saveAll(skills);
    }

    private void seedExperience() {
        Experience exp1 = new Experience();
        exp1.setCompany("TechCorp Solutions");
        exp1.setRole("Senior Full Stack Developer");
        exp1.setLocation("Remote");
        exp1.setStartDate("Jan 2022");
        exp1.setEndDate(null);
        exp1.setIsCurrent(true);
        exp1.setDescription("Leading development of microservices-based applications serving 100k+ users.");
        exp1.setHighlights(Arrays.asList(
            "Architected and implemented a microservices platform reducing deployment time by 60%",
            "Led a team of 5 developers, conducting code reviews and mentoring juniors",
            "Optimized PostgreSQL queries improving API response time by 40%",
            "Integrated CI/CD pipelines using GitHub Actions and Docker"
        ));
        exp1.setDisplayOrder(1);

        Experience exp2 = new Experience();
        exp2.setCompany("StartupXYZ");
        exp2.setRole("Software Developer");
        exp2.setLocation("Hybrid");
        exp2.setStartDate("Mar 2020");
        exp2.setEndDate("Dec 2021");
        exp2.setIsCurrent(false);
        exp2.setDescription("Built full-stack features for a SaaS product used by 500+ businesses.");
        exp2.setHighlights(Arrays.asList(
            "Developed RESTful APIs using Spring Boot and Java 11",
            "Built responsive React dashboards with TypeScript",
            "Implemented JWT-based authentication and role-based access control",
            "Reduced page load time by 35% through lazy loading and code splitting"
        ));
        exp2.setDisplayOrder(2);

        Experience exp3 = new Experience();
        exp3.setCompany("WebAgency Co.");
        exp3.setRole("Junior Web Developer");
        exp3.setLocation("On-site");
        exp3.setStartDate("Jun 2019");
        exp3.setEndDate("Feb 2020");
        exp3.setIsCurrent(false);
        exp3.setDescription("Developed and maintained client websites and web applications.");
        exp3.setHighlights(Arrays.asList(
            "Built 10+ client websites using React and modern JavaScript",
            "Collaborated with designers to implement pixel-perfect UI",
            "Maintained and refactored legacy Java applications",
            "Delivered projects on time with 95% client satisfaction rate"
        ));
        exp3.setDisplayOrder(3);

        experienceRepository.saveAll(Arrays.asList(exp1, exp2, exp3));
    }

    private void seedProjects() {
        Project p1 = new Project();
        p1.setName("E-Commerce Platform");
        p1.setDescription(
            "A full-featured e-commerce platform with product catalog, shopping cart, " +
            "user authentication, order management, and payment integration. Built with " +
            "Spring Boot microservices and React frontend."
        );
        p1.setTechStack("Java,Spring Boot,React,TypeScript,PostgreSQL,Redis,Docker");
        p1.setGithubUrl("https://github.com/yourusername/ecommerce-platform");
        p1.setDemoUrl("#");
        p1.setIsFeatured(true);
        p1.setDisplayOrder(1);

        Project p2 = new Project();
        p2.setName("Task Management System");
        p2.setDescription(
            "A real-time collaborative task management app with drag-and-drop boards, " +
            "team workspaces, notifications, and progress tracking. Features WebSocket " +
            "for live updates."
        );
        p2.setTechStack("Spring Boot,WebSocket,React,TypeScript,PostgreSQL,JWT");
        p2.setGithubUrl("https://github.com/yourusername/task-manager");
        p2.setDemoUrl("#");
        p2.setIsFeatured(true);
        p2.setDisplayOrder(2);

        Project p3 = new Project();
        p3.setName("Portfolio API");
        p3.setDescription(
            "RESTful API powering this portfolio website. Built with Spring Boot and " +
            "PostgreSQL, featuring dynamic content management, contact form handling, " +
            "and CORS-secured endpoints."
        );
        p3.setTechStack("Spring Boot,PostgreSQL,JPA,Maven,Java 17");
        p3.setGithubUrl("https://github.com/yourusername/portfolio-api");
        p3.setDemoUrl("#");
        p3.setIsFeatured(true);
        p3.setDisplayOrder(3);

        Project p4 = new Project();
        p4.setName("Weather Dashboard");
        p4.setDescription(
            "Interactive weather dashboard with real-time data, 7-day forecasts, " +
            "location search, and weather alerts. Consumes OpenWeatherMap API with " +
            "beautiful data visualizations."
        );
        p4.setTechStack("React,TypeScript,Vite,CSS3,OpenWeatherMap API");
        p4.setGithubUrl("https://github.com/yourusername/weather-dashboard");
        p4.setDemoUrl("#");
        p4.setIsFeatured(false);
        p4.setDisplayOrder(4);

        projectRepository.saveAll(Arrays.asList(p1, p2, p3, p4));
    }
}
