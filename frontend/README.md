# PAM Frontend

This directory contains the frontend application for the Patient Appointment Management System. It is built with React and configured with Vite for fast development and optimized production builds.

## Development

Install dependencies and start the development server with hot reloading:

```bash
npm install
npm run dev
```

This will serve the app at `http://localhost:5173`. Any changes to the source code will automatically reload the page.

## Production Build

To generate an optimized production build, run:

```bash
npm run build
```

The compiled assets will be output to the `dist` directory. You can locally preview the production build using:

```bash
npm run preview
```

## Docker

A `Dockerfile` is provided to containerize the frontend. To build the image and run it with nginx:

```bash
docker build -t pam-frontend .
docker run -p 80:80 pam-frontend
```

This will serve the compiled application on port 80 in the container.
