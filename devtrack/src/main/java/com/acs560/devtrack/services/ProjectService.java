package com.acs560.devtrack.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acs560.devtrack.Exceptions.ProjectIdException;
import com.acs560.devtrack.domain.Project;
import com.acs560.devtrack.repositories.ProjectRepository;

/**
 * Service class for managing Project entities.
 * Provides functionality to save or update a project in the repository.
 */
@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	/**
	 * Saves or updates a Project entity in the repository.
	 * 
	 * @param project the Project entity to be saved or updated
	 * @return the saved or updated Project entity
	 */
	public Project saveOrUpdateProject(Project project) {
		try {
		project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
		return projectRepository.save(project);
		} catch(Exception e) {
			throw new ProjectIdException("Project ID '"+project.getProjectIdentifier().toUpperCase()+"' already exists.");
		}
	}
	
	public Project findProjectByIdentifier(String projectId) {
		
		Project project=projectRepository.findByProjectIdentifier(projectId.toUpperCase());
		
		if(project==null) {
			throw new ProjectIdException("Project ID '"+projectId+"' does not exist");

		}
		return project;
	}
	
	public Iterable<Project> findAllProjects(){
		return projectRepository.findAll();
	}
	
	public void deleteProjectByIdentifier(String projectId) {
		Project project=projectRepository.findByProjectIdentifier(projectId);
		
		if(project==null) {
			throw new ProjectIdException("Cannot delete Project '"+projectId+"'.This project does not exist");
		}
		projectRepository.delete(project);
	}
	

}
