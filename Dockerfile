FROM node:14.15.4-alpine3.12

WORKDIR /app

RUN npm install -g @nestjs/cli

RUN apk add --no-cache bash curl

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod 755 entrypoint.sh

EXPOSE 3000:3000

ENTRYPOINT ["/app/entrypoint.sh"]