FROM node:6

RUN apt-get update && apt-get install imagemagick

WORKDIR /usr/app

COPY package.json /usr/app/package.json
RUN npm install

COPY index.js /usr/app/index.js

CMD ["node", "index.js"]
