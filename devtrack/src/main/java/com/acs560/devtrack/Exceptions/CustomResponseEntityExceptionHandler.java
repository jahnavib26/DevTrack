package com.acs560.devtrack.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler{
	
	
    /**
     * Handles {@link ProjectIdException} and returns a custom response entity.
     *
     * @param ex  the {@link ProjectIdException} instance
     * @param req the {@link WebRequest} instance
     * @return a {@link ResponseEntity} containing the {@link ProjectIdExceptionResponse}
     *         and HTTP status 400 (BAD REQUEST)
     */
	@ExceptionHandler
	public final ResponseEntity<Object> handleProjectIdException(ProjectIdException ex,WebRequest req){
		
		ProjectIdExceptionResponse exceptionResponse =new ProjectIdExceptionResponse(ex.getMessage());
		return new ResponseEntity(exceptionResponse,HttpStatus.BAD_REQUEST);
	}

}
