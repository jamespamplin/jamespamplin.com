FROM node:4.6.1

ENV NODE_ENV production

CMD ["npm", "start"]

EXPOSE 5000

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY . /app
