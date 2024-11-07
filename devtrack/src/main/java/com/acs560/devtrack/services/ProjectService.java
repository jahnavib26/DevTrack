package com.acs560.devtrack.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		return projectRepository.save(project);
	}

}
