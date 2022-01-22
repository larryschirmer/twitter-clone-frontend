FROM mhart/alpine-node:16.4 as base

ENV REACT_APP_BACKEND=https://twitter-clone-backend.larryschirmer.com

COPY . /app
WORKDIR /app
RUN yarn
RUN yarn build

FROM mhart/alpine-node:16.4
COPY --from=base /app/build /app/build
COPY package*.json /app/
WORKDIR /app
RUN yarn --production

EXPOSE 3000
CMD ["yarn", "prod"]

# docker build -t larryschirmer/twitter-clone-frontend:1.0.2 .
