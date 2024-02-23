#Stage 1
FROM node:20.11.1-alpine as builder
WORKDIR /app
COPY package*.json .
COPY yarn*.lock .
RUN yarn install
COPY . .
EXPOSE 3000
RUN yarn build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
COPY --from=builder /app/public ./public
ENTRYPOINT ["nginx", "-g", "daemon off;"]
