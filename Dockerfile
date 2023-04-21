# Build Angular App
FROM node:14 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build:ssr

# Create final image
FROM node:14-alpine
WORKDIR /app

COPY --from=builder /app/dist/CookieClicker /app/dist/CookieClicker

# Copy Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Install Nginx
RUN apk update && apk add nginx && \
    mkdir -p /run/nginx && \
    mkdir -p /usr/share/nginx/html

# Install PM2
RUN npm install -g pm2

# Expose ports
EXPOSE 80

# Start Nginx and Node.js server
CMD ["sh", "-c", "nginx && pm2-runtime start /app/dist/CookieClicker/server/main.js"]
