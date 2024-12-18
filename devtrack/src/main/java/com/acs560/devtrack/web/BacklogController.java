package com.acs560.devtrack.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acs560.devtrack.domain.ProjectTask;
import com.acs560.devtrack.services.MapValidationErrorService;
import com.acs560.devtrack.services.ProjectTaskService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {
	@Autowired
	private ProjectTaskService projectTaskService;

	@Autowired
	private MapValidationErrorService mapValidationErrorService;

//	@PostMapping("/{backlog_id}")
//	public ResponseEntity<?> addPTtoBacklog(@Valid @RequestBody ProjectTask projectTask,BindingResult result, @PathVariable String backlog_id){
//
//		ResponseEntity<?> errorMap=mapValidationErrorService.MapValidationService(result);
//
//		if (errorMap!=null) {
//			return errorMap;
//		}
//
//		ProjectTask projectTask1=projectTaskService.addProjectTask(backlog_id, projectTask);
//		return new ResponseEntity<>(projectTask1,HttpStatus.CREATED);
//
//	}
	@PostMapping("/{backlog_id}")
	public ResponseEntity<?> addPTtoBacklog(@Valid @RequestBody ProjectTask projectTask, BindingResult result, @PathVariable String backlog_id) {
		
	    ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
	    if (errorMap != null) {
	        return errorMap;
	    }

	    ProjectTask projectTasks = projectTaskService.addProjectTask(backlog_id, projectTask);
	    return new ResponseEntity<>(projectTasks, HttpStatus.CREATED);
	}


	@GetMapping("/{backlog_id}")
	public Iterable<ProjectTask> getProjectBacklog(@PathVariable String backlog_id){
		return projectTaskService.findBacklogById(backlog_id);

	}
	
	@GetMapping("/{backlog_id}/{pt_id}")
	public ResponseEntity<?> getProjectTask(@PathVariable String backlog_id,@PathVariable String pt_id){
		System.out.print("Calling THIS"+pt_id);
		ProjectTask projectTask=projectTaskService.findPTByProjectSequence(backlog_id,pt_id);
		return new ResponseEntity<ProjectTask>(projectTask,HttpStatus.OK);
		
	}
	
	@PatchMapping("/{backlog_id}/{pt_id}")
	public ResponseEntity<?> updateProjectTask(@Valid @RequestBody ProjectTask projectTask, BindingResult result,
			@PathVariable String backlog_id,@PathVariable String pt_id){
		ResponseEntity<?> errorMap=mapValidationErrorService.MapValidationService(result);

		if (errorMap!=null) {
			return errorMap;
		}
		
		ProjectTask updatedTask=projectTaskService.updateByProjectSequence(projectTask, backlog_id, pt_id);
		
		return new ResponseEntity<ProjectTask>(updatedTask,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/{backlog_id}/{pt_id}")
	public ResponseEntity<?> deleteProjectTask(@PathVariable String backlog_id,@PathVariable String pt_id){
		projectTaskService.deletePTByProjectSequence(backlog_id,pt_id);
		
		return new ResponseEntity<String>("Project Task "+pt_id+" was successfully deleted",HttpStatus.OK);
	
	}

}
