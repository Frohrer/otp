FROM node:14-alpine

# Install Chromium and required dependencies
RUN apk update && apk add chromium && rm -rf /var/cache/apk/*

WORKDIR /app
RUN mkdir tmp

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm", "start"]