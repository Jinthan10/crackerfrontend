# Step 1: Use a Node.js image to build the app
#FROM node:18 AS build
FROM public.ecr.aws/docker/library/node:10 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) first for caching dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire React app
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Set up the production image (using a smaller image)
#FROM nginx:alpine
FROM public.ecr.aws/nginx/nginx:alpine

# Copy the build folder from the build image to the Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will use
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
