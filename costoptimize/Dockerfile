# Build Stage
FROM node:20-alpine as build

WORKDIR /app

COPY ["package*.json", "./"]

RUN yarn install

COPY . .

ARG VITE_GATEWAY_API
ARG VITE_COMMON_DATA_API
ARG VITE_AUTH_API

RUN touch /app/.env
RUN echo "VITE_GATEWAY_API=***\n\
VITE_COMMON_DATA_API=***\n\
VITE_AUTH_API=***\n\
VITE_INVENTORY_API=***" > /app/.env

RUN yarn run build

# Release Stage
FROM node:20-alpine as release

WORKDIR /app

RUN mkdir -p /app/node_modules
RUN mkdir -p /app/dist

COPY --from=build ./app/node_modules ./node_modules
COPY --from=build ./app/dist ./dist
COPY --from=build ["./app/package.json", "./app/yarn.lock", "./"]

EXPOSE 8080

CMD ["yarn", "prod"]