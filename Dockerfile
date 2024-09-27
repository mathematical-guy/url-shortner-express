# Step 1: Use the official Node.js image from Docker Hub
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /home/node/app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install all dependencies (including nodemon)
RUN npm install

# Step 5: Copy the application source code
COPY . .

# Step 6: Set ownership of the app folder to the non-root 'node' user
RUN chown -R node:node /home/node/app

# Step 7: Switch to the 'node' user to run the app with non-root privileges
USER node

# Step 8: Expose the application port (e.g., 3000)
EXPOSE 3000

# Step 9: Run the app using nodemon for development
CMD ["npm", "run", "dev"]
