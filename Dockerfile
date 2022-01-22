FROM mhart/alpine-node:16.4 as base

COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM mhart/alpine-node:16.4
COPY --from=base /app/build /app/build
COPY package*.json /app/
WORKDIR /app
RUN npm install --only=prod

EXPOSE 3000
CMD ["yarn", "prod"]

# docker build -t larryschirmer/twitter-clone-frontend:1.0.0 .
