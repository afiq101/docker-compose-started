FROM node:18
WORKDIR /client
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

ARG PORT
ARG NUXT_API_URL
ENV PORT=$PORT
ENV NUXT_API_URL=$NUXT_API_URL

EXPOSE 8080
CMD ["yarn", "preview"]