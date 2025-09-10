# Backend Service

This directory contains the Java Spring Boot application for the Patient Appointment Management System.

## Build and Run

```sh
./gradlew clean build
./gradlew bootRun
```

The application will start on port 8080.

## Docker

Use the provided `Dockerfile` to build a container image:

```sh
docker build -t pam-backend .
```

Run the container with port mapping:

```sh
docker run -p 8080:8080 pam-backend
```

