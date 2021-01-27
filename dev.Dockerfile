FROM node:latest

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN yarn install

CMD [ "yarn", "dev" ]