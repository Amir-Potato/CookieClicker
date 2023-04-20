# state 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# state 2
FROM nginx:alpine
COPY --from=node app/dist/CookieClicker/browser /usr/share/nginx/html