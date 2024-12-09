# Use OpenJDK as the base image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Install dependencies required for Maven Wrapper
RUN apt-get update && apt-get install -y curl && apt-get clean

# Copy the entire project to the container
COPY . .

# Set executable permissions for Maven Wrapper
RUN chmod +x mvnw

# Expose the port Spring Boot runs on
EXPOSE 8080

# Command to run the Spring Boot application using Maven Wrapper
ENTRYPOINT ["./mvnw", "spring-boot:run"]
