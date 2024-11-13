/**
 * Service class for mapping validation errors in a Spring Boot application.
 * This service captures field-specific validation errors and returns them
 * as a map in the response entity.
 */

package com.acs560.devtrack.services;

import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

@Service
public class MapValidationErrorService {
	
    /**
     * Maps the validation errors found in the {@link BindingResult} to a response entity.
     *
     * @param result the {@link BindingResult} containing validation errors, if any
     * @return a {@link ResponseEntity} containing a map of field names and their error messages
     *         if validation errors are present, otherwise returns {@code null}
     */
	
	public ResponseEntity<?> MapValidationService(BindingResult result){
		
	    if (result.hasErrors()) {
	        System.out.println("Validation errors found: " + result.getAllErrors());
	        Map<String, String> errorMap = new HashMap<>();
	        for (FieldError error : result.getFieldErrors()) {
	            errorMap.put(error.getField(), error.getDefaultMessage());
	        }
	        return new ResponseEntity<Map<String,String>>(errorMap, HttpStatus.BAD_REQUEST);
	    }
		
	    return null;
	}

}