package com.acs560.devtrack.services;


import java.io.InputStreamReader;
import java.io.Reader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.acs560.devtrack.domain.Project;
import com.acs560.devtrack.repositories.ProjectRepository;
import com.opencsv.CSVReader;

@Service
public class ETLService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ETLService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Transactional
    public void etlProcess(MultipartFile file) {
        // Extract data from CSV
    	System.out.println("inside etl process");
        List<Project> projects = extractProjects(file);

        // Transform the extracted data
        List<Project> transformedProjects = transformProjects(projects);

        // Load the transformed data into MySQL database
        loadProjects(transformedProjects);
    }

    private List<Project> extractProjects(MultipartFile file) {
        System.out.println("inside extract");
        List<Project> projects = new ArrayList<>();
        try {
            Reader reader = new InputStreamReader(file.getInputStream());
            CSVReader csvReader = new CSVReader(reader);
            String[] headers = csvReader.readNext(); // Read the header row
            
            String[] nextLine;
            while ((nextLine = csvReader.readNext()) != null) {
                // Ensure we have enough columns
                if (nextLine.length < 8) {
                    System.err.println("Skipping row with insufficient columns: " + Arrays.toString(nextLine));
                    continue;
                }

                Project project = new Project();
                
                // Safely set project fields with null checks and default values
                project.setProjectName(isValidString(nextLine[5]) ? nextLine[5] : "Untitled Project");
                project.setProjectIdentifier(isValidString(nextLine[4]) ? nextLine[4] : "UNIDENTIFIED_" + UUID.randomUUID().toString());
                project.setDescription(isValidString(nextLine[2]) ? nextLine[2] : "No description available");

                // Set dates with careful parsing
                project.setStart_date(parseDate(nextLine[6]));
                project.setEnd_date(parseDate(nextLine[5]));
                project.setCreated_At(parseDate(nextLine[7]));
                project.setUpdated_At(parseDate(nextLine[7]));

                projects.add(project);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return projects;
    }

    // Helper method to validate strings
    private boolean isValidString(String str) {
        return str != null && !str.trim().isEmpty() && !str.trim().equals(",");
    }

    // Helper method to parse dates safely
    private java.sql.Date parseDate(String dateStr) {
        if (!isValidString(dateStr)) {
            return null;
        }
        
        try {
            // Try parsing as is
            return java.sql.Date.valueOf(dateStr.trim());
        } catch (IllegalArgumentException e) {
            try {
                // Try parsing with some common formats
                SimpleDateFormat[] formats = {
                    new SimpleDateFormat("yyyy-MM-dd"),
                    new SimpleDateFormat("MM/dd/yyyy"),
                    new SimpleDateFormat("dd-MM-yyyy")
                };
                
                for (SimpleDateFormat format : formats) {
                    try {
                        Date parsedDate = format.parse(dateStr.trim());
                        return new java.sql.Date(parsedDate.getTime());
                    } catch (ParseException ignored) {}
                }
            } catch (Exception ex) {
                System.err.println("Could not parse date: " + dateStr);
            }
            return null;
        }
    }

    private List<Project> transformProjects(List<Project> projects) {
    	System.out.println("inside transform");
        List<Project> transformedProjects = new ArrayList<>();
        for (Project project : projects) {
            if (project.getProjectName() == null || project.getProjectName().trim().isEmpty()) {
                project.setProjectName("Untitled Project");
            }
            if (project.getDescription() == null || project.getDescription().trim().isEmpty()) {
                project.setDescription("No description available");
            }
            transformedProjects.add(project);
        }
        return transformedProjects;
    }

    private void loadProjects(List<Project> projects) {
    	System.out.println("inside load");
        projectRepository.saveAll(projects);  // Save all projects in one batch
    }
}

