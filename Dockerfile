FROM node:9

WORKDIR /usr/src/app

COPY dist ./dist
COPY package.json ./package.json

RUN npm install

EXPOSE 3001
CMD [ "node", "./dist/server/index.js" ]
