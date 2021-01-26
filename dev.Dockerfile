FROM node:14.15.4

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN yarn install

CMD [ "yarn", "dev" ]