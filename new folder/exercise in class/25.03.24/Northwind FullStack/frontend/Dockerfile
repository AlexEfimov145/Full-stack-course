FROM node:15-alpine as builder

WORKDIR /app

COPY package.json ./

RUN npm i

COPY ./ ./

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
# CMD nginx -g daemon off;