# Base image
FROM node:20

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build prisma
RUN npx prisma generate

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "run", "dev"]