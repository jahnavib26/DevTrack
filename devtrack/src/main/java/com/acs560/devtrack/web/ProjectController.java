package com.acs560.devtrack.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acs560.devtrack.domain.Project;
import com.acs560.devtrack.services.MapValidationErrorService;
import com.acs560.devtrack.services.ProjectService;

import jakarta.validation.Valid;

/**
 * REST controller for managing Project resources.
 * Provides an endpoint for creating a new project.
 */
@RestController
@RequestMapping("/api/project")
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
	    return new ResponseEntity<>(savedProject, HttpStatus.CREATED);
	}

    /**
     * Retrieves a Project by its identifier.
     *
     * @param projectId the identifier of the Project to be retrieved
     * @return ResponseEntity containing the Project entity with HTTP status 200 (OK)
     */

	@GetMapping("/{projectId}")
	public ResponseEntity<?> getProjectById(@PathVariable String projectId){

		Project project=projectService.findProjectByIdentifier(projectId);

		return new ResponseEntity<>(project,HttpStatus.OK);

	}

    /**
     * Retrieves all Projects.
     *
     * @return an iterable collection of Project entities with HTTP status 200 (OK)
     */
	@GetMapping("/all")
	public Iterable<Project> getAllProjects(){
		return projectService.findAllProjects();
	}

	 /**
     * Deletes a Project by its identifier.
     * @param projectId the identifier of the Project to be deleted
     * @return ResponseEntity with a confirmation message and HTTP status 200 (OK)
     */

	@DeleteMapping("/{projectId}")
	public ResponseEntity<?> deleteProject(@PathVariable String projectId){
		projectService.deleteProjectByIdentifier(projectId.toUpperCase());

		return new ResponseEntity<>("Project with ID '"+projectId+"' is deleted.",HttpStatus.OK);
	}




}
