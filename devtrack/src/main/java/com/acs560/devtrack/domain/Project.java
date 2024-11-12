package com.acs560.devtrack.domain;

import java.util.Date;


import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

/**
 * Represents a project entity in the system
 */
@Getter
@Setter
@Entity
public class Project {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@NotBlank(message="Project name is required")
	private String projectName;
	@NotBlank(message="Project Identifier is required")
	@Size(min=4,max=5,message="Please use 4 to 5 characters")
	@Column(updatable=false, unique=true)
	private String projectIdentifier;
	@NotBlank(message="Project description is required")
	private String description;
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date start_date;
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date end_date;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date created_At;
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date updated_At;
	
	/**
	 * Sets the creation timestamp before the project is persisted.
	 */
	@PrePersist
	protected void onCreate() {
		 System.out.println("Setting created_At date");
		this.created_At=new Date();
	}
	
	/**
	 * Sets the update timestamp before the project is updated.
	 */
	@PreUpdate
	protected void onUpdate() {
		this.updated_At=new Date();
	}

	public Project() {

	}

}
