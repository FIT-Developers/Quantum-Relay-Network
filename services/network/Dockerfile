# Stage: build
FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage: runtime
FROM node:18-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./
RUN npm ci --production
EXPOSE 4100
USER node
CMD ["node", "dist/server.js"]