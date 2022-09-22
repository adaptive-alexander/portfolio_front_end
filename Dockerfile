FROM node:18-bullseye-slim AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:18-bullseye-slim
WORKDIR /app
COPY --from=builder /app/build /app
RUN npm install -g serve
CMD ["serve","-s","/app"]
