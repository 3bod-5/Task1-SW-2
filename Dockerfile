FROM node:14-alpine
WORKDIR /app
COPY node.js package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD node node.js