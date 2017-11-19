FROM node:9.2-alpine

ENV NODE_ENV production

CMD ["npm", "start"]

EXPOSE 5000

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY . /app
