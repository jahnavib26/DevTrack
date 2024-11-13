package com.acs560.devtrack.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acs560.devtrack.domain.Project;
import com.acs560.devtrack.repositories.ProjectRepository;
import com.acs560.devtrack.services.MapValidationErrorService;
import com.acs560.devtrack.services.ProjectService;

import jakarta.validation.Valid;

/**
 * REST controller for managing Project resources.
 * Provides an endpoint for creating a new project.
 */
@RestController
@RequestMapping("/api/devtrack")
public class ProjectController {
	
	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private MapValidationErrorService mapValidationErrorService;
	
    /**
     * Creates a new project.
     * 
     * @param project the Project entity to be created, validated with @Valid
     * @param result  the BindingResult object to hold any validation errors
     * @return ResponseEntity containing either the saved Project entity with
     *         HTTP status 201 (CREATED) or a map of validation errors with
     *         HTTP status 400 (BAD REQUEST)
     */
	@PostMapping("")
	public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project,BindingResult result) {
		
		ResponseEntity<?> errorMap= mapValidationErrorService.MapValidationService(result);
		
		if(errorMap!=null) {
			return errorMap;
		}

	    Project savedProject = projectService.saveOrUpdateProject(project);
	    return new ResponseEntity<Project>(savedProject, HttpStatus.CREATED);
	}


}
