package com.acs560.devtrack.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.acs560.devtrack.domain.ProjectTask;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask,Long>{
	
	List<ProjectTask> findByProjectIdentifierOrderByPriority(String id);

}
