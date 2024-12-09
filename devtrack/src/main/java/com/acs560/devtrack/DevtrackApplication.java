package com.acs560.devtrack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
public class DevtrackApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevtrackApplication.class, args);

	}

}
