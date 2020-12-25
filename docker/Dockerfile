FROM node:12-alpine

WORKDIR /app
ENV NODE_ENV=production
RUN yarn global add lerna

COPY package.json lerna.json yarn.lock ./
COPY packages/common/package.json ./packages/common/package.json
COPY packages/client/package.json ./packages/client/package.json
COPY packages/server/package.json ./packages/server/package.json

RUN yarn install --production

ADD packages/common ./packages/common
ADD packages/server ./packages/server
ADD packages/client ./packages/client

RUN yarn run bootstrap

COPY docker/entrypoint.sh ./
RUN chmod +x ./entrypoint.sh

ENTRYPOINT [ "./entrypoint.sh" ]