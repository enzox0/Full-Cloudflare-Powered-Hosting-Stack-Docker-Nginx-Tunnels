FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the application (build directory will be created)
RUN npm run build

# Keep container running to copy build files
CMD ["sh", "-c", "echo 'Build complete. Build files are in /app/build' && tail -f /dev/null"]

