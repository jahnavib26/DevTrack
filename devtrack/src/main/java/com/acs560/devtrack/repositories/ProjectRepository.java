package com.acs560.devtrack.repositories;

import org.springframework.data.repository.CrudRepository;
import com.acs560.devtrack.domain.Project;

/**
 * Repository interface for accessing and managing {@link Project} entities.
 */
public interface ProjectRepository extends CrudRepository<Project,Long>{
	
	/**
	 * Retrieves all {@link Project} entities by their IDs.
	 * 
	 * @param iterable an iterable collection of project IDs
	 * @return an iterable collection of {@link Project} entities
	 */
	@Override
	Iterable<Project> findAllById(Iterable<Long> iterable);

}
