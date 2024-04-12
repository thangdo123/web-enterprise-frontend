FROM node:20-alpine as prod

WORKDIR /src

COPY package*.json yarn*lock ./

COPY . .

RUN yarn install

CMD [ "yarn", "start" ]

