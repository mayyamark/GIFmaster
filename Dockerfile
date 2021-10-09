# syntax=docker/dockerfile:1
FROM node:14.18-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY .env.local .
COPY .babelrc .
COPY tsconfig.json .
COPY next.config.js .
COPY next-alias.js .
COPY next-env.d.ts .
COPY .eslintrc .
COPY .prettierrc.js .

RUN yarn install

COPY public public
COPY pages pages
COPY src src

RUN yarn build

CMD ["yarn", "start"]