package com.acs560.devtrack.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Backlog implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private Integer PTSequence=0;
	private String projectIdentifier;

	@OneToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="project_id",nullable=false)
	@JsonIgnore
	private Project project;

	@OneToMany(fetch=FetchType.EAGER,cascade=CascadeType.REFRESH,mappedBy="backlog",orphanRemoval=true)
	private List<ProjectTask> projectTasks=new ArrayList<>();

	public Backlog() {

	}


}
