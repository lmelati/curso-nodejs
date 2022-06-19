FROM node:alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY build .

RUN ls -l

EXPOSE 3000

CMD ["node", "index.js"]