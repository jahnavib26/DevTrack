package com.acs560.devtrack.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectIdException extends RuntimeException{

    /**
     * Constructs a new {@code ProjectIdException} with the specified detail message.
     *
     * @param message the detail message, which is saved for later retrieval by
     *                the {@link Throwable#getMessage()} method
     */
	public ProjectIdException(String message) {
		super(message);
	}

}
