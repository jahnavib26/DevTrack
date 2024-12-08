# Welcome to DevTrack

DevTrack is an application designed to keep track of tasks throughout the Software Development Process. It provides tools for managing and organizing your development work efficiently.

## Tech Stack

- **Backend**: Spring Boot
- **Database**: MySQL
- **Frontend**: React

This application uses three tables in MySQL: **Project**, **Backlog**, and **Project Task**.

## Dockerization

The entire application is Dockerized and utilizes Docker Compose to create three containers, which communicate with each other within the same network.

## Useful Commands

### Docker Compose

- Build and start the containers:
  ```bash
  docker-compose up --build
  ```
- Stop and remove the containers:
  ```bash
  docker-compose down
  ```

### Create JAR

- Build the project and create the JAR file:
  ```bash
  sudo ./mvnw clean package
  ```

### Run JAR

- Run the generated JAR file:
  ```bash
  java -jar devtrack-0.0.1-SNAPSHOT.jar
  ```

### Docker Command

- Remove all Docker images:
  ```bash
  docker rmi $(docker images -q)
  ```

### MySQL

- Start MySQL server:
  ```bash
  sudo /usr/local/mysql/support-files/mysql.server start
  ```
- Stop MySQL server:
  ```bash
  sudo /usr/local/mysql/support-files/mysql.server stop
  ```

## Access the Application

Once the application is running, you can access it at [http://localhost:3000](http://localhost:3000).
