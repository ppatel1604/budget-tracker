FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

COPY . .

RUN npm run build

FROM nginx
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]