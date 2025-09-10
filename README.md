# # Patient Appointment Management System

This repository hosts a monorepo for the **Patient Appointment Management System (PAM)**. The application allows patients to register, browse doctors, and book appointments while giving administrators the ability to manage doctor profiles and system-wide appointments.

The project is divided into the following top-level directories:

- **`backend/`** – Spring Boot service built with Gradle. It exposes REST APIs, integrates with AWS DynamoDB, and is ready for deployment on AWS ECS Fargate. See [`backend/README.md`](backend/README.md) for build and runtime instructions.
- **`frontend/`** – React application powered by Vite. It provides the user and admin interfaces and consumes the backend APIs. See [`frontend/README.md`](frontend/README.md) for development and deployment details.
- **`postman/`** – Postman collection containing example requests to exercise the backend endpoints.

## Getting Started

Clone the repository and navigate into the root directory:

```bash
git clone <repository-url>
cd patientappointment
```

### Running the Backend

From the `backend` directory, you can run the Spring Boot application with Gradle:

```bash
cd backend
./gradlew bootRun
```

This starts the server on port **8080**. To build a Docker image for deployment, first build the JAR and then build the image:

```bash
./gradlew bootJar
docker build -t pam-backend .
```

### Running the Frontend

From the `frontend` directory, install dependencies and start the development server:

```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173`. For an optimized production build or containerized deployment, refer to the frontend README.

## API Collection

The `postman` folder contains a basic Postman collection (`PAM.postman_collection.json`) to test the health check and doctor listing endpoints. Import this collection into Postman and set the `baseUrl` environment variable to point to your running backend (e.g., `http://localhost:8080`).

## License

Specify your project license here.
