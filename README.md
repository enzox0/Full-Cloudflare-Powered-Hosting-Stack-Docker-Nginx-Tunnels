# Full-Stack Web Application

A modern full-stack web application built with React and Express.js, containerized with Docker and served through Nginx as a reverse proxy.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

This is a full-stack web application demonstrating a modern development setup with:
- **Frontend**: React-based single-page application
- **Backend**: RESTful API built with Express.js
- **Infrastructure**: Docker containerization with Docker Compose
- **Web Server**: Nginx reverse proxy for serving static files and routing API requests

The application showcases a clean separation between frontend and backend, with the frontend making API calls to the backend through a reverse proxy.

## 🛠 Technologies Used

### Frontend
- **React** (v18.2.0) - JavaScript library for building user interfaces
- **React DOM** (v18.2.0) - React renderer for web
- **React Scripts** (v5.0.1) - Configuration and scripts for Create React App

### Backend
- **Node.js** (v18) - JavaScript runtime environment
- **Express.js** (v4.18.2) - Web application framework for Node.js
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing middleware

### Infrastructure & DevOps
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container Docker application orchestration
- **Nginx** - Web server and reverse proxy
- **Alpine Linux** - Lightweight Linux distribution for Docker images

## 📁 Project Structure

```
test-project/
├── backend/                 # Backend API server
│   ├── Dockerfile          # Backend container configuration
│   ├── index.js            # Express server entry point
│   └── package.json        # Backend dependencies
├── frontend/               # React frontend application
│   ├── Dockerfile          # Frontend container configuration
│   ├── package.json        # Frontend dependencies
│   ├── public/             # Static public files
│   │   └── index.html      # HTML template
│   └── src/                # React source code
│       ├── App.js          # Main React component
│       ├── App.css         # Component styles
│       ├── index.js        # React entry point
│       └── index.css       # Global styles
├── nginx/                  # Nginx configuration
│   └── nginx.conf          # Nginx server configuration
├── docker-compose.yml      # Docker Compose orchestration file
└── README.md               # This file
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Docker** (v20.10 or higher)
   - Download from: [https://www.docker.com/get-started](https://www.docker.com/get-started)
   - Verify installation: `docker --version`

2. **Docker Compose** (v2.0 or higher)
   - Usually included with Docker Desktop
   - Verify installation: `docker-compose --version`

3. **Node.js** (v18 or higher) - *Optional, for local development*
   - Download from: [https://nodejs.org/](https://nodejs.org/)
   - Verify installation: `node --version`

4. **npm** (v9 or higher) - *Optional, for local development*
   - Usually comes with Node.js
   - Verify installation: `npm --version`

## 🚀 Installation & Setup

### Step 1: Clone or Navigate to the Project

If you have the project in a repository, clone it:
```bash
git clone <repository-url>
cd test-project
```

Or navigate to the project directory if you already have it:
```bash
cd test-project
```

### Step 2: Verify Docker Installation

Ensure Docker and Docker Compose are running:
```bash
docker --version
docker-compose --version
```

Start Docker Desktop if you're on Windows or macOS.

### Step 3: Build and Start the Application

Build and start all services using Docker Compose:
```bash
docker-compose up --build
```

This command will:
- Build Docker images for backend and frontend
- Create and start all containers (backend, frontend, nginx)
- Set up the network and volumes

**Note**: The first build may take several minutes as it downloads base images and installs dependencies.

### Step 4: Access the Application

Once all containers are running, access the application:

- **Frontend**: Open your browser and navigate to [http://localhost:8000](http://localhost:8000)
- **Backend API**: Direct access at [http://localhost:3000](http://localhost:3000)
- **Health Check**: [http://localhost:8000/health](http://localhost:8000/health)

## 🎮 Running the Project

### Using Docker Compose (Recommended)

**Start the application:**
```bash
docker-compose up
```

**Start in detached mode (background):**
```bash
docker-compose up -d
```

**Stop the application:**
```bash
docker-compose down
```

**Stop and remove volumes:**
```bash
docker-compose down -v
```

**View logs:**
```bash
docker-compose logs -f
```

**View logs for a specific service:**
```bash
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f nginx
```

**Rebuild after code changes:**
```bash
docker-compose up --build
```

### Local Development (Without Docker)

#### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The backend will run on `http://localhost:3000`

#### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000` (default React port)

**Note**: For local development, you may need to configure the frontend to proxy API requests to the backend, or update the API endpoint URLs in the frontend code.

## 🔌 API Endpoints

The backend provides the following REST API endpoints:

### Health Check
- **GET** `/health`
  - Returns server status and timestamp
  - Response: `{ "status": "ok", "timestamp": "2024-01-01T00:00:00.000Z" }`

### Hello Endpoint
- **GET** `/api/hello`
  - Returns a greeting message from the backend
  - Response: `{ "message": "Hello from the backend API!", "timestamp": "...", "environment": "production" }`

### Data Endpoint
- **GET** `/api/data`
  - Returns sample data array
  - Response: `{ "data": [{ "id": 1, "name": "Item 1", "value": 100 }, ...] }`

### Accessing Endpoints

When running with Docker Compose:
- Through Nginx: `http://localhost:8000/api/hello`
- Direct backend: `http://localhost:3000/api/hello`

## 💻 Development

### Making Changes

1. **Backend Changes**: Edit files in the `backend/` directory
   - After changes, rebuild: `docker-compose up --build backend`

2. **Frontend Changes**: Edit files in the `frontend/src/` directory
   - After changes, rebuild: `docker-compose up --build frontend`

3. **Nginx Configuration**: Edit `nginx/nginx.conf`
   - After changes, restart: `docker-compose restart nginx`

### Development Scripts

**Backend:**
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon (auto-reload)

**Frontend:**
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 🔧 Troubleshooting

### Port Already in Use

If you encounter port conflicts:

1. **Change ports in docker-compose.yml:**
   ```yaml
   ports:
     - "3001:3000"  # Change 3000 to 3001
     - "8001:80"    # Change 8000 to 8001
   ```

2. **Or stop the conflicting service:**
   ```bash
   # Find process using port 3000
   netstat -ano | findstr :3000
   # Kill the process (Windows)
   taskkill /PID <PID> /F
   ```

### Docker Build Fails

1. **Clear Docker cache:**
   ```bash
   docker-compose build --no-cache
   ```

2. **Remove old containers and images:**
   ```bash
   docker-compose down
   docker system prune -a
   ```

### Frontend Not Loading

1. **Check if frontend build completed:**
   ```bash
   docker-compose logs frontend
   ```

2. **Verify Nginx is running:**
   ```bash
   docker-compose ps
   ```

3. **Check Nginx logs:**
   ```bash
   docker-compose logs nginx
   ```

### Backend Connection Issues

1. **Verify backend is running:**
   ```bash
   curl http://localhost:3000/health
   ```

2. **Check backend logs:**
   ```bash
   docker-compose logs backend
   ```

3. **Test API endpoint:**
   ```bash
   curl http://localhost:8000/api/hello
   ```

### Container Issues

**View all running containers:**
```bash
docker-compose ps
```

**Restart a specific service:**
```bash
docker-compose restart backend
docker-compose restart frontend
docker-compose restart nginx
```

**Remove all containers and start fresh:**
```bash
docker-compose down
docker-compose up --build
```

## 📝 Additional Notes

- The application uses Docker volumes to share the frontend build output between containers
- Nginx serves as a reverse proxy, routing `/api/*` requests to the backend
- The frontend is built as a static site and served by Nginx
- All services communicate through a Docker bridge network (`app-network`)
- The backend runs in production mode when using Docker Compose

## 🤝 Contributing

1. Make your changes in the appropriate directory
2. Test locally or rebuild Docker containers
3. Ensure all services start correctly
4. Submit your changes

## 📄 License

This project is provided as-is for educational and development purposes.

---

**Happy Coding! 🚀**

