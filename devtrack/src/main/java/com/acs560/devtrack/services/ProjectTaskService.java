package com.acs560.devtrack.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acs560.devtrack.domain.Backlog;
import com.acs560.devtrack.domain.ProjectTask;
import com.acs560.devtrack.repositories.BacklogRepository;
import com.acs560.devtrack.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskService {
	
	@Autowired
	private BacklogRepository backlogRepository;
	
	@Autowired
	private ProjectTaskRepository projectTaskRepository;
	
	public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
		
		Backlog backlog=backlogRepository.findByProjectIdentifier(projectIdentifier);
		
		projectTask.setBacklog(backlog);
		
		Integer BacklogSequence=backlog.getPTSequence();
		
		BacklogSequence++;
		
		backlog.setPTSequence(BacklogSequence);			
		projectTask.setProjectSequence(projectIdentifier+"-"+BacklogSequence);
		projectTask.setProjectIdentifier(projectIdentifier);
		
		if(projectTask.getPriority()==null) {
			projectTask.setPriority(3);
		}
		if (projectTask.getStatus()==""||projectTask.getStatus()==null) {
			projectTask.setStatus("TODO");
		}
		return projectTaskRepository.save(projectTask);
	}
	
	public Iterable<ProjectTask> findBacklogById(String id){
		return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
	}

}
