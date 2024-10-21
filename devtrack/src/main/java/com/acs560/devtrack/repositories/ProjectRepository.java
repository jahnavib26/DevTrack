package com.acs560.devtrack.repositories;

import org.springframework.data.repository.CrudRepository;
import com.acs560.devtrack.domain.Project;

public interface ProjectRepository extends CrudRepository<Project,Long>{
	
	@Override
	Iterable<Project> findAllById(Iterable<Long> iterable);

}
