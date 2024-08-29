# Etapa de construcción
FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /app/dist/star-wars-app /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
