package com.acs560.devtrack.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.acs560.devtrack.domain.Backlog;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog,Long> {

	Backlog findByProjectIdentifier(String Identifier);


}
