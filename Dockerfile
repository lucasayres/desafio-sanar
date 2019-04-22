FROM node:11.14.0-slim
FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./

ENV NODE_ENV=production PORT=80

RUN npm install

RUN npm run build

EXPOSE 80

CMD ["node", "./src/server/server.js"]