#DEV BUILD
FROM node:18.12.0-alpine3.16 as build

WORKDIR /frontend-app

COPY package.json .

RUN npm install

COPY . /frontend-app/.

RUN npm run build

#PROD
FROM nginx:1.24.0-alpine3.17-slim
COPY --from=build /frontend-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]