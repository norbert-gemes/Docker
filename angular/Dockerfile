FROM node:20.18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM httpd:2.4
COPY --from=build /app/dist/hike-challenge/browser /usr/local/apache2/htdocs/