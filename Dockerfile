# Stage 1: Build the React Application
FROM node:22 as build
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

# Stage 2: Serve the React Application using a simple HTTP server
FROM node:22 as production
WORKDIR /app
RUN yarn global add serve
COPY --from=build /app/build /app
EXPOSE 80
CMD ["serve", "-s", ".", "-l", "8080"]