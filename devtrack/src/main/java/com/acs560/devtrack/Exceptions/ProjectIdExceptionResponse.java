package com.acs560.devtrack.Exceptions;

public class ProjectIdExceptionResponse {
	
	private String projectIdentifier;

    /**
     * Constructs a new {@code ProjectIdExceptionResponse} with the specified project identifier.
     *
     * @param projectIdentifier the project identifier that caused the exception
     */
	public ProjectIdExceptionResponse(String projectIdentifier) {
		this.projectIdentifier = projectIdentifier;
	}
	
    /**
     * Gets the project identifier that caused the exception.
     *
     * @return the project identifier
     */
	public String getProjectIdentifier() {
		return projectIdentifier;
	}
	
    /**
     * Sets the project identifier that caused the exception.
     *
     * @param projectIdentifier the project identifier to set
     */
	public void setProjectIdentifier(String projectIdentifier) {
		this.projectIdentifier = projectIdentifier;
	}
	
	

}
