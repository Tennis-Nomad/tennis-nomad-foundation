# Dockerfile for Tennis Nomad Foundation static site (Cloud Run + runtime env vars)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Install lightweight HTTP server
RUN npm install -g serve

# Expose Cloud Run port (default 8080)
EXPOSE 8080

# Build the app at runtime so it picks up Cloud Run environment variables
CMD npm run build && serve -s dist -l ${PORT:-8080}
