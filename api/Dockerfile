FROM node:18
WORKDIR /api
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

ARG PORT
ARG NODE_ENV
ENV PORT=$PORT
ENV NODE_ENV=$NODE_ENV

EXPOSE 3000
CMD ["yarn", "preview"]