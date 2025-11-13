# Stage 1: Builder
FROM node:20 as builder

# Set working directory
WORKDIR /app

# Copy only package.json (no package-lock.json)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy rest of the project files
COPY . .

# Build production bundle
RUN npm run build

# Stage 2: Production
FROM alpine:latest

# Install Nginx to serve static files
RUN apk add --no-cache nginx

# Copy build output from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Add your custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
