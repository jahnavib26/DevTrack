package com.acs560.devtrack.repositories;

import org.springframework.data.repository.CrudRepository;
import com.acs560.devtrack.domain.Project;

/**
 * Repository interface for accessing and managing {@link Project} entities.
 */
public interface ProjectRepository extends CrudRepository<Project, Long>{
	
	Project findByProjectIdentifier(String projectId);
	
	@Override
	Iterable<Project> findAll();

}
