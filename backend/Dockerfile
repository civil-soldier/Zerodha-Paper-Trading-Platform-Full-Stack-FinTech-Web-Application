# Step 1: Base image (Node environment)
FROM node:18-alpine

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package files first (for caching)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy rest of code
COPY . .

# Step 6: Expose port
EXPOSE 5000

# Step 7: Start app
CMD ["npm", "start"]